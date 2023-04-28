import unittest
from main import app

class TestAuthenticateUser(unittest.TestCase):
    
    def setUp(self):
        self.test_client = app.test_client(self)

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

# class TestAddMessage(unittest.TestCase):
    
    

if __name__ == '__main__':
    unittest.main()