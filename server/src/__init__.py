from flask import Flask, Blueprint

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
    app.register_blueprint(api_bp)

    return app