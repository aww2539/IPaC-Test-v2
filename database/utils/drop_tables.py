from .connect_to_db import conn
import psycopg2

def drop_table(table_name):
    with conn:
        sql = f'''
            DROP TABLE IF EXISTS {table_name} CASCADE
        '''

        cursor = conn.cursor()
        try:
            cursor.execute(sql)
        except psycopg2.Error as error:
            print(error)

        print(f'{table_name} dropped')
        cursor.close()
    conn.close()

def drop_all_tables(table_names = ['category_sids', 'feature_sids', 'categories', 'features']):
    print("Dropping all tables...")

    for table in table_names:
        drop_table(table)

    conn.close()

    print("All tables dropped.")

def drop_schema():
    with conn:
        sql = f'''
            DROP SCHEMA public CASCADE
        '''

        cursor = conn.cursor()
        try:
            cursor.execute(sql)
        except psycopg2.Error as error:
            print(error)

        cursor.close()
    conn.close()