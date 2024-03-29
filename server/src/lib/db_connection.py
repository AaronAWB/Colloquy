import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv; load_dotenv()

class DB_Connection:

    def __init__(self):
        self.params = os.getenv("DB_CONNECTION_INFO_STRING")
        
    def get_channel(self, channel):

        try:
            
            conn = psycopg2.connect(self.params)
            cur = conn.cursor(cursor_factory = RealDictCursor)
            
            query = f'''
            SELECT t.*, u."Username"
            FROM {channel} t
            LEFT JOIN users u ON t."UserId" = u."Id"
            ORDER BY t."CreatedAt" ASC'''
            
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
    
    def get_channel_list(self):

        try:
            
            conn = psycopg2.connect(self.params)
            cur = conn.cursor(cursor_factory = RealDictCursor)
            
            query = f'SELECT * FROM channels'
            
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

            query = f'SELECT * FROM users WHERE ("Username") = %s AND ("Password") = %s'
            cur.execute(query, (username, password))

            row = cur.fetchone()

            if row is None:
                return False, None
        
            return True, row[0]

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
            return False, None

    
    def add_message(self, message, channel, userId):

        try:
            
            conn = psycopg2.connect(self.params)
            cur = conn.cursor()
            
            query = f'''
            INSERT INTO {channel} ("UserId", "Message") 
            VALUES (%s, %s) 
            RETURNING "Id", "CreatedAt",
            (SELECT "Username" FROM users WHERE "Id" = %s)
            '''
            cur.execute(query, (userId, message, userId))

            result = cur.fetchone()
            Id, CreatedAt, Username = result
            CreatedAt = CreatedAt.isoformat()
            
            conn.commit()
            cur.close()
            conn.close()

        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

        return {"Id": Id,
                "UserId": userId, 
                "Username": Username,
                "Message": message, 
                "Channel": channel,
                "CreatedAt": CreatedAt
                }
    
    def add_user(self, username, password):

        try:
    
            conn = psycopg2.connect(self.params)
            cur = conn.cursor()

            query = 'SELECT 1 FROM users WHERE "Username" = (%s)'
            cur.execute(query, (username,))
            exists = cur.fetchone()

            if exists:
                return {"Error": f"User {username} already exists."}
            
            else:
                query = 'INSERT INTO users ("Username", "Password") VALUES (%s, %s)'
                cur.execute(query, (username, password))

            conn.commit()
            cur.close()
            conn.close()

            return {"Success": f"User {username} created!"}
        
        except(Exception, psycopg2.DatabaseError) as error:
            return {"Error": {error}}
    
    def add_channel(self, data):

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

            channels_update_query = f'INSERT INTO channels ("ChannelName") VALUES (%s) RETURNING "Id"'
            cur.execute(channels_update_query, (table_name,))
            channel_id = cur.fetchone()[0]
            conn.commit()
            
            cur.close()
            conn.close()
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(f'Error inserting data: {error}')

        return {"ChannelName": table_name, "Id": channel_id}
        
db_connection = DB_Connection()






