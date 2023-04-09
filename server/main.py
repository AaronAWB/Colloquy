from flask import request
from flask_socketio import SocketIO
from src import create_app

app = create_app()
socketio = SocketIO(app, cors_allowed_origins='*', logger=True)

@socketio.on('connect')
def handle_connection():
    print("----- USER CONNECTED ---------: ", request.sid)

@socketio.on('test')
def test(data):    
    print(data)

print(app.url_map)

if __name__ == '__main__':
    socketio.run(app, debug=True)