from flask import Blueprint, request
from flask_restx import Api, Resource

from src.lib.db_connection import db_connection

api_bp = Blueprint('api', __name__, '/api')
api = Api(api_bp)

@api.route('/users')
class CreateUser(Resource):
    def post(self):
        user_data = request.get_json()
        return db_connection.add_user(user_data), 201

@api.route('/users')
class GetAllUsers(Resource):
    def get(self):
        return db_connection.get_table('users'), 200

@api.route('/users/<user_id>')
class GetUser(Resource):
    def get(self, user_id):
        return db_connection.get_user(user_id), 200

@api.route('/messages')
class CreateMessage(Resource):
    def post(self):
        data = request.json()
        user_id = data["user_id"]
        text = data["text"]
        created_date = data["created_date"]
        return db_connection.add_message(user_id, text, created_date), 201

@api.route('/messages')
class GetAllMessages(Resource):
    def get(self):
        return db_connection.get_table('messages'), 200