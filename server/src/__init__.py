import os
from flask import Flask, Blueprint, request
from flask_restx import Api
from flask_jwt_extended import create_access_token, jwt_required, JWTManager
from dotenv import load_dotenv; load_dotenv()

from src.routes.database import CreateUser, GetAllUsers, GetUser, CreateMessage, GetAllMessages, CreateChannel, GetChannels

def create_app():
    app = Flask(__name__, static_url_path='/', static_folder='../../client/dist')
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRECT_KEY')
    app.config['JWT_ALGORITHM'] = 'HS256'
    jwt = JWTManager(app)

    @app.route('/', defaults={'path': ''})
    @app.route('/<string:path>')
    def serve_static(path):
        try:
            return app.send_static_file(path)
        except:
            return app.send_static_file('index.html')
        
    @app.post('login/auth')
    def login():
        username = request.json['username']
        password = request.json['password']
        
        
    api_bp = Blueprint('api', __name__, url_prefix='/api')
    api = Api(api_bp)
    
    api.add_resource(CreateUser, '/users')
    api.add_resource(GetAllUsers, '/users')
    api.add_resource(GetUser, '/users/<user_id>')
    api.add_resource(CreateMessage, '/messages/<channel>')
    api.add_resource(GetAllMessages, '/messages')
    api.add_resource(CreateChannel, '/channels')
    api.add_resource(GetChannels, '/channels')
    

    app.register_blueprint(api_bp)   

    return app