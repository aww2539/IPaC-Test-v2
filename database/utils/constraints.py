from .connect_to_db import conn
import psycopg2

def add_category_constraints():
    print("Adding constraints to categories table...")
    with conn:
        sql = '''
            ALTER TABLE categories
                ADD CONSTRAINT fk_category_sid FOREIGN KEY(sid) REFERENCES category_sids(id)
        '''

        cursor = conn.cursor()
        try:
            cursor.execute(sql)
        except psycopg2.Error as error:
            print(error)

        cursor.close()
        print("Category constraints added.")

def add_feature_constraints():
    print("Adding constraints to features table...")
    with conn:
        sql = '''
            ALTER TABLE features
                ADD CONSTRAINT fk_feature_sid FOREIGN KEY(sid) REFERENCES feature_sids(id),
                ADD CONSTRAINT fk_feature_category_sid FOREIGN KEY(category_sid) REFERENCES category_sids(id),
                ADD CONSTRAINT fk_feature_category FOREIGN KEY(category_id) REFERENCES categories(id)
        '''

        cursor = conn.cursor()
        try:
            cursor.execute(sql)
        except psycopg2.Error as error:
            print(error)

        cursor.close()
        print("Feature constraints added.")

def add_all_constraints():
    print("Adding all constraints...")

    add_category_constraints()
    add_feature_constraints()

    print("Constraints added.")

    conn.close()

