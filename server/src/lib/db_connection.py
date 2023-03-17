import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv; load_dotenv()

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
            resp = cur.fetchall()
            
            cur.close()
            conn.close()
            print ('Database connection closed.')
            print (resp)
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            resp = {}
        
        return resp
    
    def get_user(self, id):
        
        try:
            print('Connecting to database...')
            conn = psycopg2.connect(self.params)
            print('Database connection established.')
            
            cur = conn.cursor(cursor_factory = RealDictCursor)
            sql_query = f'SELECT * FROM users WHERE  = {id}'
            cur.execute(sql_query)
            resp = cur.fetchone()

            cur.close()
            conn.close()
            print ('Database connection closed.')

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            resp = {}
        
        return resp

    
    def add_message(self, data):

        try:
            print("Connecting to database...")
            conn = psycopg2.connect(self.params)
            print("Database connection established.")

            cur = conn.cursor()
            sql_query = f'INSERT INTO messages (user_id, text, created_date) VALUES (s%, s%, s%)'
            cur.execute(sql_query, (data["user_id"], data["text"], data["createddate"]))

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
        
db_connection = DB_Connection()






