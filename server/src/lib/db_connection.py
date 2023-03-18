import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv; load_dotenv()

from src.utils.helper_functions import remove_quotation_marks

class DB_Connection:

    def __init__(self):
        self.params = os.getenv("CONNECTION_INFO_STRING")
        
    def get_table(self, table):

        try:
            print('Connecting to database...')
            conn = psycopg2.connect(self.params)
            print('Database connection established.')
            
            cur = conn.cursor(cursor_factory = RealDictCursor)
            sql_query = f'SELECT * FROM {table}'
            cur.execute(sql_query)
            rows = cur.fetchall()
            
            cur.close()
            conn.close()
            print ('Database connection closed.')
            print (rows)

            for row in rows:
                row['CreatedAt'] = row['CreatedAt'].isoformat()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            rows = {}
        
        return rows
    
    def get_user(self, id):
        
        try:
            print('Connecting to database...')
            conn = psycopg2.connect(self.params)
            print('Database connection established.')
            
            cur = conn.cursor(cursor_factory = RealDictCursor)
            sql_query = f'SELECT * FROM users WHERE ("Id") = {id}'
            cur.execute(sql_query)
            
            row = cur.fetchone()
            row['CreatedAt'] = row['CreatedAt'].isoformat()

            cur.close()
            conn.close()
            print ('Database connection closed.')

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            row = {}
        
        return row

    
    def add_message(self, data, channel):

        try:
            print("Connecting to database...")
            conn = psycopg2.connect(self.params)
            print("Database connection established.")

            cur = conn.cursor()
            sql_query = f'INSERT INTO {channel} ("UserId", "Message") VALUES (%s, %s)'
            cur.execute(sql_query, (data["UserId"], data["Message"]))

            conn.commit()
            cur.close()
            conn.close()

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

        return "Message added."
    
    def add_user(self, data):

        print(data)

        try:
            print("Connecting to database...")
            conn = psycopg2.connect(self.params)
            print("Database connection established.")

            cur = conn.cursor()
            sql_query = f'INSERT INTO users ("Username") VALUES (%s)'
            cur.execute(sql_query, (data["Username"],))

            conn.commit()
            cur.close()
            conn.close()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(f'Error inserting data: {error}')

        return f"User {data['Username']} created!"
    
    def add_channel(self, data):

        print(data)

        try:
            print("Connecting to database...")
            conn = psycopg2.connect(self.params)
            print("Database connection established.")

            table_name = data["Channel_Name"]

            cur = conn.cursor()
            sql_query = f'''
            CREATE TABLE {table_name} (
                id SERIAL PRIMARY KEY,
                UserId INTEGER REFERENCES users ("Id"),
                Message TEXT,
                CreatedAt TIMESTAMP WITH TIME ZONE
            )
            '''
            cur.execute(sql_query)

            conn.commit()
            cur.close()
            conn.close()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(f'Error inserting data: {error}')

        return f"Channel {data['Channel_Name']} created!"
        
db_connection = DB_Connection()






