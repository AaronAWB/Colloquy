import os
import unittest
import psycopg2
from testing.postgresql import Postgresql
from dotenv import load_dotenv; load_dotenv()
from main import app
from src.lib.db_connection import db_connection

class TestAuthenticateUser(unittest.TestCase):
    
    def setUp(self):
        self.test_client = app.test_client(self)
        db_connection.params = os.getenv("DB_CONNECTION_INFO_STRING")

    def test_valid_username_and_password(self):
        response = self.test_client.post('/api/authenticate', json={'username': 'Guest', 'password': 'GuestPwd'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('access_token', response.json)
    
    def test_invalid_username(self):
        response = self.test_client.post('/api/authenticate', json={'username': 'Guest@1', 'password': 'GuestPwd'})
        self.assertEqual(response.status_code, 401)
        self.assertIn('access_denied', response.json)

    def test_invalid_password(self):
        response = self.test_client.post('/api/authenticate', json={'username': 'Guest', 'password': 'GuestPwd@1'})
        self.assertEqual(response.status_code, 401)
        self.assertIn('access_denied', response.json)

class TestAddMessage(unittest.TestCase):

    def setUp(self):
        self.postgresql = Postgresql()
        self.conn = psycopg2.connect(self.postgresql.url())
        db_connection.params = self.postgresql.url()
        self.cursor = self.conn.cursor()
        
        create_users_table_query = ('''
            CREATE TABLE IF NOT EXISTS users (
                "Id" SERIAL PRIMARY KEY,
                "Username" TEXT
                )
            ''')
        self.cursor.execute(create_users_table_query)
        self.conn.commit()

        create_user_query = ('INSERT INTO users ("Username") VALUES (%s)')
        self.cursor.execute(create_user_query, ('test_user',))
        self.conn.commit()

        create_test_channel_query = ('''
            CREATE TABLE IF NOT EXISTS test_channel (
                "Id" SERIAL PRIMARY KEY,
                "UserId" INTEGER REFERENCES users ("Id"),
                "Message" TEXT,
                "CreatedAt" TIMESTAMP WITH TIME ZONE
                    DEFAULT CURRENT_TIMESTAMP
                )
            ''')
        self.cursor.execute(create_test_channel_query)
        self.conn.commit()
        
    def test_add_message(self):
        message = "Test message."
        channel = 'test_channel'
        userId = 1
        
        result = db_connection.add_message(message, channel, userId)

        self.cursor = self.conn.cursor()
        self.cursor.execute('SELECT COUNT(*) FROM test_channel')
        count = self.cursor.fetchone()[0]
        self.assertEqual(count, 1)

        expected_result = {
            "Id": 1,
            "UserId": userId,
            "Username": "test_user",
            "Message": message,
            "Channel": channel,
            "CreatedAt": str(result["CreatedAt"])
        }

        self.assertDictEqual(result, expected_result)

    def tearDown(self):
        self.cursor.close()
        self.conn.close()
        self.postgresql.stop()

if __name__ == '__main__':
    unittest.main()