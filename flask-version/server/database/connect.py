from os import getenv
from dotenv import load_dotenv
import psycopg2

load_dotenv()
DB_HOST = getenv('DB_HOST')
DB_PORT = int(getenv('DB_PORT'))
DB_USER = getenv('DB_USER')
DB_PASSWORD = getenv('DB_PASSWORD')
DB_NAME = getenv('DB_NAME')


def connect_to_db():
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME,
    )
    if conn.closed == 0:
        print("Connected To Database: ", conn.info)
    else:
        print("Connection Failed")

    return conn
