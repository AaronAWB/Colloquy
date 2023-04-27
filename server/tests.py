import unittest
from unittest.mock import patch
from main import app

class TestAuthenticateUser(unittest.TestCase):
    
    def setUp(self):
        self.test_client = app.test_client(self)
        
    @patch('app.db_connection.authenticate_user')
    def test_valid_user_authentication(self, mock_authenticate_user):
        mock_authenticate_user.return_value = (True, 1)
        response = self.test_client.post('/authenticate', json={'username': 'TestUser', 'password': '123456'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('access_token', response.json)
    
    @patch('app.db_connection.authenticate_user')
    def test_invalid_user_authentication(self, mock_authenticate_user):
        mock_authenticate_user.return_value = (False, None)
        response = self.test_client.post('/authenticate', json={'username': 'TestUser', 'password': '123456'})
        self.assertEqual(response.status_code, 401)
        self.assertIn('access_denied', response.json)
    
if __name__ == '__main__':
    unittest.main()