import psycopg2
import psycopg2.extras

from config import config

def connect():
    conn = None
    try:
        params = config()
        print('Connecting to the PostgreSQL server...')
        conn = psycopg2.connect(**params)
        print('Connection established.')

        cur = conn.cursor()
        cur.close()
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')
    
connect()




