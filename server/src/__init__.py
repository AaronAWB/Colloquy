from flask import Flask

def create_app():
    app = Flask(__name__)

    from src.routes.static import static_bp
    app.register_blueprint(static_bp)

    return app

