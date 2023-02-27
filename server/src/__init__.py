from flask import Flask, send_from_directory

def create_app():
    app = Flask(__name__, static_folder='../static/dist', static_url_path='')

    @app.route('/')
    def serve_index():
        return send_from_directory(app.static_folder, 'index.html')

    return app

