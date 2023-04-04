from flask import Blueprint, request
from flask_restx import Api, Resource
from flask_jwt_extended import create_access_token
from datetime import timedelta

from src.lib.db_connection import db_connection

api_bp = Blueprint('api', __name__, '/api')
api = Api(api_bp)

@api.route('/users')
class CreateUser(Resource):
    def post(self):
        username = request.json['username']
        password = request.json['password']
        return db_connection.add_user(username, password), 201
    
@api.route('/users/<user_id>')
class GetUser(Resource):
    def get(self, user_id):
        return db_connection.get_user(user_id), 200

@api.route('/users')
class GetAllUsers(Resource):
    def get(self):
        return db_connection.get_table('users'), 200

@api.route('/messages/<channel>')
class CreateMessage(Resource):
    def post(self, channel):
        message_data = request.get_json()
        return db_connection.add_message(message_data, channel), 201

@api.route('/messages/<channel>')
class GetAllMessages(Resource):
    def get(self, channel):
        return db_connection.get_table(channel), 200
    
@api.route('/channels')
class CreateChannel(Resource):
    def post(self):
        channel_data = request.get_json()
        return db_connection.add_channel(channel_data), 201

@api.route('/channels')
class GetChannels(Resource):
    def get(self):
        return db_connection.get_table('channels'), 200
    
@api.route('/authenticate')
class AuthenticateUser(Resource):
    def post(self):
        username = request.json['username']
        password = request.json['password']

        is_valid_user, user_id = db_connection.authenticate_user(username, password)

        if not is_valid_user:
            return {'access_denied': 'invalid credentials'}, 401
        
        access_token = create_access_token(identity=user_id, expires_delta=timedelta(minutes=30))
        response_data = {'access_token': access_token}
        return response_data, 200