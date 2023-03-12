import os
import psycopg2
from dotenv import load_dotenv; load_dotenv()

class DB_Connection():

    def __init__(self) -> None:
        self.params = f'''postgresql://{os.getenv("DB_USER")}:
        {os.getenv("DB_PASSWORD")}@{os.getenv("DB_HOST")}:
        {os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'''
    
    def get_table(self, table):

        try:
            print('Connecting to database...')
            conn = psycopg2.connect(self.params)
            print('Database connection established.')
            
            cur = conn.cursor()
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
    
    def get_user(self, user_id):
        
        try:
            print('Connecting to database...')
            conn = psycopg2.connect(self.params)
            print('Database connection established.')
            
            cur = conn.cursor()
            sql_query = f'SELECT * FROM users WHERE user_id = {user_id}'
            cur.execute(sql_query)
            resp = cur.fetchone()

            cur.close()
            conn.close()
            print ('Database connection closed.')

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            resp = {}
        
        return resp

    
    def add_message(self, user_id, text, created_date):

        try:
            print("Connecting to database...")
            conn = psycopg2.connect(self.params)
            print("Database connection established.")

            cur = conn.cursor()
            sql_query = f'INSERT INTO messages ({user_id}, {text}, {created_date})'
            cur.execute(sql_query)

            cur.close()
            conn.close()

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

        return "Message added."
    
    def add_user(self, username, user_id):

        try:
            print("Connecting to database...")
            conn = psycopg2.connect(self.params)
            print("Database connection established.")

            cur = conn.cursor()
            sql_query = f'INSERT INTO users ({username}, {user_id})'
            cur.execute(sql_query)

            cur.close()
            conn.close()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

        return "User added."
        
db_connection = DB_Connection()
db_connection.get_table('users')





