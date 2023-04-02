import os
from flask import Flask, Blueprint
from flask_restx import Api
from flask_jwt_extended import JWTManager
from flask_socketio import SocketIO

from dotenv import load_dotenv; load_dotenv()

from src.routes.database import (CreateUser, 
                                 GetAllUsers, 
                                 GetUser, 
                                 CreateMessage, 
                                 GetAllMessages, 
                                 CreateChannel, 
                                 GetChannels, 
                                 AuthenticateUser)

app = Flask(__name__, static_url_path='/', static_folder='../../client/dist')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
app.config['JWT_ALGORITHM'] = 'HS256'
jwt = JWTManager(app)
socketio = SocketIO(app)

def create_app():

    @app.route('/', defaults={'path': ''})
    @app.route('/<string:path>')
    def serve_static(path):
        try:
            return app.send_static_file(path)
        except:
            return app.send_static_file('index.html')
        
    api_bp = Blueprint('api', __name__, url_prefix='/api')
    api = Api(api_bp)
    
    api.add_resource(CreateUser, '/users')
    api.add_resource(GetAllUsers, '/users')
    api.add_resource(GetUser, '/users/<user_id>')
    api.add_resource(CreateMessage, '/messages/<channel>')
    api.add_resource(GetAllMessages, '/messages')
    api.add_resource(CreateChannel, '/channels')
    api.add_resource(GetChannels, '/channels')
    api.add_resource(AuthenticateUser, '/authenticate')
    

    app.register_blueprint(api_bp)   

    return app