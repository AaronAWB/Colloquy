from flask import request
from flask_socketio import SocketIO, join_room, leave_room
from src import create_app
from src.lib.db_connection import db_connection

app = create_app()
socketio = SocketIO(app, cors_allowed_origins='*', logger=True)

@socketio.on('connect')
def handle_connection():
    print("--------- USER CONNECTED ---------: ", request.sid)

@socketio.on('join')
def handle_join(data):
    join_room(data)
    print('User joined channel: ', data)

@socketio.on('leave')
def handle_leave(data):
    leave_room(data)
    print('User left channel: ', data)

@socketio.on('add_message')
def handle_add_message(data):
    message = data['message']
    channel = data['channel']
    userId = data['userId']
    message = db_connection.add_message(message, channel, userId)
    socketio.emit('message_added', message, room=channel)

@socketio.on('add_channel')
def handle_add_channel(data):
    new_channel = db_connection.add_channel(data)
    socketio.emit ('channel_added', new_channel)

if __name__ == '__main__':
    socketio.run(app, debug=False)