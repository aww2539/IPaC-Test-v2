import time
from utils.parser import parse_json, parsed_category_sids, parsed_feature_sids, parsed_categories, parsed_features
from utils.create_tables import create_all_tables
from utils.insert_data import insert_all_seed_data
from utils.constraints import add_all_constraints

start_time = time.time()

create_all_tables()

parse_json()

insert_all_seed_data(
    parsed_category_sids, 
    parsed_feature_sids, 
    parsed_categories, 
    parsed_features
)

add_all_constraints()

print("------------------------")
print("Executed in %s seconds." % (time.time() - start_time))
print("------------------------")
