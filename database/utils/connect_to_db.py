from os import getenv
from dotenv import load_dotenv
import psycopg2

load_dotenv()
DB_HOST = getenv('DB_HOST')
DB_PORT = int(getenv('DB_PORT'))
DB_USER = getenv('DB_USER')
DB_PASSWORD = getenv('DB_PASSWORD')
DB_NAME = getenv('DB_NAME')

conn = psycopg2.connect(
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD,
    host=DB_HOST,
    port=DB_PORT
)
conn.set_session(autocommit=True)
