import json
from models import Category, CategorySid, Feature, FeatureSid

with open("./data/FeaturesEndpointResponse.json") as file:
    json_data = json.load(file)

json_data_features = json_data['data']['features']
json_data_categories = json_data['data']['featureCategories']

parsed_features = []
parsed_categories = []
parsed_feature_sids = []
parsed_category_sids = []

def parse_category_sids():
    for count, jdc in enumerate(json_data_categories, start=1):
        jdc_sid = jdc['sid']

        cs = CategorySid(
            id = jdc_sid.get('id'),
            category_id = count
        )

        parsed_category_sids.append(cs)

    print("Parsed Category Sids")
    print("Length: ", len(parsed_category_sids))

def parse_feature_sids():
    for count, jdf in enumerate(json_data_features, start=1):
        jdf_sid = jdf['sid']

        fs = FeatureSid(
            id = jdf_sid.get('id'),
            feature_id = count
        )

        parsed_feature_sids.append(fs)

    print("Parsed Feature Sids")
    print("Length: ", len(parsed_feature_sids))

def parse_categories():
    for count, jdc in enumerate(json_data_categories, start=1):
        jdc_sid = jdc['sid']
        # print(type(count))
        # print(type(jdc.get('sortOrder')))
        # print(type(jdc_sid.get('id')))

        c = Category(
            id = count,
            sid = jdc_sid.get('id'),
            name = jdc.get('name'),
            sort_order = jdc.get('sortOrder'),
            optional_description = jdc.get('optionalDescription'),
            optional_display_description = jdc.get('optionalDisplayDescription'),
            is_resource_category = jdc.get('isResourceCategory')
        )

        parsed_categories.append(c)

        # Table column order
        #
        # id
        # sid
        # name
        # sort_order
        # optional_description
        # optional_display_description
        # is_resource_category
    
    print("Parsed Categories")
    print("Length: ", len(parsed_categories))
    

def parse_features():
    for count, jdf in enumerate(json_data_features, start=1):
        jdf_sid = jdf['sid']
        jdf_category_sid = jdf['categorySid']
        category_sid = jdf_category_sid.get('id')
        category_sid_obj = next((pcs for pcs in parsed_category_sids if pcs.id == category_sid), None)
        # print(len(parsed_category_sids) + count)
        # for key, value in category_sid_obj.__dict__.items():
        #     print(f"{key}: {value}")

        f = Feature(
            id = count,
            sid = jdf_sid.get('id'),
            category_id = category_sid_obj.category_id,
            category_sid = category_sid,
            display_name = jdf.get('displayName'),
            ep_keywords = jdf.get('epKeywords'),
            optional_description = jdf.get('optionalDescription'),
            is_deleted = jdf.get('isDeleted'),
            status_code = jdf.get('statusCode'),
            start_date = jdf.get('startDate'),
            optional_end_date = jdf.get('optionalEndDate')
        )

        parsed_features.append(f)
        
        # Table column order
        #
        # id
        # sid
        # category_id
        # category_sid
        # display_name
        # ep_keywords
        # optional_description
        # is_deleted
        # status_code
        # start_date
        # optional_end_date
    
    print("Parsed Features")
    print("Length: ", len(parsed_features))
    


def parse_json():
    parse_category_sids()
    parse_feature_sids()
    parse_categories()
    parse_features()

    # for pfs in parsed_feature_sids:
    #     print("-------------")

    #     for key, value in pfs.__dict__.items():
    #         print(f"{key}: {value}")

    # for pcs in parsed_category_sids:
    #     print("-------------")

    #     for key, value in pcs.__dict__.items():
    #         print(f"{key}:", type(value))
    #         print(f"{key}: {value}")

    # for f in parsed_features:
    #     print("-------------")

    #     for key, value in f.__dict__.items():
    #         print(f"{key}: {value}")

    # for c in parsed_categories:
    #     print("-------------")

    #     for key, value in c.__dict__.items():
    #         print(f"{key}:", type(value))
    #         print(f"{key}: {value}")
