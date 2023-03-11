import requests
import os
from flask import Flask, jsonify
import psycopg2

from dotenv import load_dotenv; load_dotenv()

class DB_Connection():

    def __init__(self) -> None:
        self.session = requests.Session()
        self.session.body = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        self.connection_params = {os.getenv(**'CONNECTION_PARAMS')}
    
    def get_table(self, table):

        try:
            print('Connecting to database...')
            conn = psycopg2.connect(self.connection_params)
            print('Database connection established.')
            
            cur = conn.cursor()
            sql_query = f'SELECT * FROM {table}'
            cur.execute(sql_query)
            resp = cur.fetchall()
            
            cur.close()
            conn.close()
            print ('Database connection closed.')
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)
        
        return jsonify(resp)


# def add_message(user_id, text, date):
#     with app.app_context():
#         try:

#             params = config()
#             conn =  psycopg2.conntect(**params)

#             cur = conn.cursor
#             sql_query = f'INSERT INTO messages ({user_id}, {text}, {date})'
#             cur.execute(sql_query)
            
#             cur.close()
#             conn.close()

#         except(Exception, psycopg2.DatabaseError) as error:
#             print(error)

# print(f'The get_table function returned: {get_table("messages")}')

# if __name__ == '__main__':
#     app.run(debug=True)
    




