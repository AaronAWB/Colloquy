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
class GetAllChannels(Resource):
    def get(self):
        return db_connection.get_table('channels'), 200