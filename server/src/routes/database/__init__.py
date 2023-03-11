from flask_restx import Api, Resource, Request
from flask import Blueprint

from src.lib.db_connection import DB_Connection

api_bp = Blueprint('database', __name__, '/api')
api = Api(api_bp)

@api.route('/messages')
class GetAllMessages(Resource):
    def get(self):
        return DB_Connection.get_table('messages')

@api.route('/users')
class CreateMessage(Resource):
    def get(self):
        return DB_Connection.get_table('users')
    
@api.route('/messages')
class CreateMessage(Resource):
    def post(self):
        data = Request.get_json()
        user_id = data["user_id"]
        text = data["text"]
        created_date = data["created_date"]
        return DB_Connection.add_message(user_id, text, created_date)