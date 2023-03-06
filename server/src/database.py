from flask import jsonify
import psycopg2

from config import config

def get_table (table):
    try: 
        params = config()
        conn = psycopg2.connect(**params)
        cur = conn.cursor()

        sql_query = f'SELECT * FROM {table}'

        cur.execute(sql_query)
        results = cur.fetchall()

        cur.execute (f'SELECT count(*) FROM information_schema.columns WHERE table_name = {table}')
        columns_num = cur.fetchone()[0]

        cur.close()
        conn.close

        results_list = []
        for row in results:
            row_dict = {}
            for i in range(columns_num):
                row_dict[cur.description[i].name] = row[i]
            results_list.append(row_dict)
    
        return jsonify(results_list) 
    
    except Exception as e:
        return jsonify(f'Error: {str(e)}'), 500

def connect():
    
    conn = None
    cur = None
    
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




