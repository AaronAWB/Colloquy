from flask import Flask, Blueprint
from flask_restx import Api

from src.routes.database import CreateUser, GetAllUsers, GetUser, CreateMessage, GetAllMessages

def create_app():
    app = Flask(__name__, static_url_path='/', static_folder='../../client/dist')

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
    api.add_resource(CreateMessage, '/messages')
    api.add_resource(GetAllMessages, '/messages')
    
    app.register_blueprint(api_bp)   

    return app