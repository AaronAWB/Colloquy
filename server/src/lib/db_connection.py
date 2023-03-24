import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv; load_dotenv()

class DB_Connection:

    def __init__(self):
        self.params = os.getenv("DB_CONNECTION_INFO_STRING")
        
    def get_table(self, table):

        try:
            
            conn = psycopg2.connect(self.params)
            cur = conn.cursor(cursor_factory = RealDictCursor)
            
            query = f'SELECT * FROM {table}'
            cur.execute(query)
            rows = cur.fetchall()
            
            cur.close()
            conn.close()

            for row in rows:
                row['CreatedAt'] = row['CreatedAt'].isoformat()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            rows = {}
        
        return rows
    
    def get_user(self, id):
        
        try:
            
            conn = psycopg2.connect(self.params)
            cur = conn.cursor(cursor_factory = RealDictCursor)
            
            query = f'SELECT * FROM users WHERE ("Id") = {id}'
            cur.execute(query)
            
            row = cur.fetchone()
            row['CreatedAt'] = row['CreatedAt'].isoformat()

            cur.close()
            conn.close()

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            row = {}
        
        return row
    
    def authenticate_user(self, username, password):

        try:

            conn = psycopg2.connect(self.params)
            cur = conn.cursor()

            query = f'SELECT * FROM users WHERE ("Username") = {username} AND ("password") = {password}'
            cur.execute(query)

            row = cur.fetchone()

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            row = None

        return False if row is None else True
    
    
    def add_message(self, data, channel):

        try:
            
            conn = psycopg2.connect(self.params)
            cur = conn.cursor()
            
            query = f'INSERT INTO {channel} ("UserId", "Message") VALUES (%s, %s)'
            cur.execute(query, (data["UserId"], data["Message"]))

            conn.commit()
            cur.close()
            conn.close()

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

        return "Message added."
    
    def add_user(self, data):

        try:
    
            conn = psycopg2.connect(self.params)
            cur = conn.cursor()
            
            query = f'INSERT INTO users ("Username") VALUES (%s)'
            cur.execute(query, (data["Username"],))

            conn.commit()
            cur.close()
            conn.close()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(f'Error inserting data: {error}')

        return f"User {data['Username']} created!"
    
    def add_channel(self, data):

        print(data)

        try:
            
            conn = psycopg2.connect(self.params)
            
            table_name = data["Channel_Name"]

            cur = conn.cursor()
            create_channel_query = f'''
            CREATE TABLE IF NOT EXISTS {table_name} (
                "Id" SERIAL PRIMARY KEY,
                "UserId" INTEGER REFERENCES users ("Id"),
                "Message" TEXT,
                "CreatedAt" TIMESTAMP WITH TIME ZONE
                    DEFAULT CURRENT_TIMESTAMP
            )
            '''
            cur.execute(create_channel_query)
            conn.commit()

            channels_update_query = f"INSERT INTO channels (\"ChannelName\") VALUES ('{table_name}')"
            cur.execute(channels_update_query)
            conn.commit()
            
            cur.close()
            conn.close()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(f'Error inserting data: {error}')

        return f"Channel {data['Channel_Name']} created!"
        
db_connection = DB_Connection()






