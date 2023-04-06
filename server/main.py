from src import create_app
from flask_socketio import SocketIO

app = create_app()
socketio = SocketIO(app, cors_allowed_origins='*')

print(app.url_map)

if __name__ == '__main__':
    socketio.run(app, debug=True)