from psycopg2 import Error
from .connect_to_db import conn

def insert_one_category_sid(category_sid):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO category_sids (id, category_id) 
            VALUES (%s, %s)
        '''

        try:
            cursor.execute(sql, (category_sid.id, category_sid.category_id))
        except Error as error:
            print(error)

        cursor.close()    

def insert_many_category_sids(category_sids):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO category_sids (id, category_id) 
            VALUES (%s, %s)
        '''

        batch_data = [(cs.id, cs.category_id ) for cs in category_sids]
        try:
            cursor.executemany(sql, batch_data)
        except Error as error:
            print(error)

        cursor.close()    

def insert_one_feature_sid(feature_sid):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO feature_sids (id, feature_id) 
            VALUES (%s, %s)
        '''

        try:
            cursor.execute(sql, (feature_sid.id, feature_sid.feature_id))
        except Error as error:
            print(error)

        cursor.close()    

def insert_many_feature_sids(feature_sids):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO feature_sids (id, feature_id) 
            VALUES (%s, %s)
        '''

        batch_data = [(fs.id, fs.feature_id ) for fs in feature_sids]
        try:
            cursor.executemany(sql, batch_data)
        except Error as error:
            print(error)

        cursor.close()    

def insert_one_category(category):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO categories (id, sid, name, sort_order, optional_description, optional_display_description, is_resource_category) 
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        '''

        try:
            cursor.execute(
                sql, 
                (
                    category.id, 
                    category.sid, 
                    category.name,
                    category.sort_order,
                    category.optional_description,
                    category.optional_display_description,
                    category.is_resource_category
                )
            )
        except Error as error:
            print(error)

        cursor.close()    

def insert_many_categories(categories):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO categories (id, sid, name, sort_order, optional_description, optional_display_description, is_resource_category) 
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        '''

        batch_data = [
            (
                cat.id, 
                cat.sid, 
                cat.name,
                cat.sort_order,
                cat.optional_description,
                cat.optional_display_description,
                cat.is_resource_category
            )
            for cat in categories
        ]
        try:
            cursor.executemany(sql, batch_data)
        except Error as error:
            print(error)

        cursor.close()    

def insert_one_feature(feature):
    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO features (id, sid, category_id, category_sid, display_name, ep_keywords, optional_description, is_deleted, status_code, start_date, optional_end_date) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        '''

        try:
            cursor.execute(
                sql, 
                (
                    feature.id, 
                    feature.sid, 
                    feature.category_id,
                    feature.category_sid,
                    feature.display_name,
                    feature.ep_keywords,
                    feature.optional_description,
                    feature.is_deleted,
                    feature.status_code,
                    feature.start_date,
                    feature.optional_end_date
                )
            )
        except Error as error:
            print(error)

        cursor.close()    

def insert_many_features(features):

    with conn:
        cursor = conn.cursor()

        sql = '''
            INSERT INTO features (id, sid, category_id, category_sid, display_name, ep_keywords, optional_description, is_deleted, status_code, start_date, optional_end_date) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        '''

        batch_data = [
            (
                f.id, 
                f.sid, 
                f.category_id,
                f.category_sid,
                f.display_name,
                f.ep_keywords,
                f.optional_description,
                f.is_deleted,
                f.status_code,
                f.start_date,
                f.optional_end_date
            )
            for f in features
        ]
        try:
            cursor.executemany(sql, batch_data)
        except Error as error:
            print(error)

        cursor.close()

def insert_all_seed_data(category_sids, feature_sids, categories, features):
    insert_many_category_sids(category_sids)
    insert_many_feature_sids(feature_sids)
    insert_many_categories(categories)
    insert_many_features(features)
    