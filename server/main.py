from flask import request
from flask_socketio import SocketIO
from src import create_app
from src.lib.db_connection import db_connection

app = create_app()
socketio = SocketIO(app, cors_allowed_origins='*', logger=True)

@socketio.on('connect')
def handle_connection():
    print("--------- USER CONNECTED ---------: ", request.sid)

@socketio.on('add_message')
def handle_add_message(data):
    message = data['message']
    channel = data['channel']
    userId = data['userId']
    message = db_connection.add_message(message, channel, userId)
    socketio.emit('message_added', message)

@socketio.on('update_messages')
def handle_update_messages(data):
    messages = db_connection.get_table(data['channel'])
    socketio.emit('updated_message_list', messages)

@socketio.on('update_channel_list')
def handle_update_channels():
    channels = db_connection.get_table('channels')
    socketio.emit('updated_channel_list', channels)

@socketio.on('add_channel')
def handle_add_channel(data):
    new_channel = db_connection.add_channel(data)
    socketio.emit ('channel_added', new_channel)

if __name__ == '__main__':
    socketio.run(app, debug=True)