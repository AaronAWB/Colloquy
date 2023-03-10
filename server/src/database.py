from flask import Flask, jsonify
import psycopg2

from config import config

app = Flask(__name__)
    
def get_table(table):
    with app.app_context():
        try: 

            params = config()
            print('Connecting to the PostgreSQL server...')
            conn = psycopg2.connect(**params)
            print('Connection established.')
        
            cur = conn.cursor()

            sql_query = f'SELECT * FROM {table}'

            cur.execute(sql_query)
            results = cur.fetchall()

            cur.close()
            conn.close()
            print('Database connection closed')
    
            return jsonify(results) 
        
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

def add_message(user_id, text, date):
    with app.app_context():
        try:

            params = config()
            conn =  psycopg2.conntect(**params)

            cur = conn.cursor
            sql_query = f'INSERT INTO messages ({user_id, text, date})'
            cur.execute(sql_query)
            
            cur.close()
            conn.close()
            
        except(Exception, psycopg2.DatabaseError) as error:
            print(error)

print(f'The get_table function returned: {get_table("messages")}')

if __name__ == '__main__':
    app.run(debug=True)
    




