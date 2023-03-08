from flask import jsonify
import psycopg2

from config import config
    
def get_table(table):
    
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

print(f'The get_table function returned: {get_table("messages")}')
    




