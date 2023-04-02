from flask_socketio import emit
from src.lib.db_connection import db_connection
from flask_socketio import SocketIO;

socketio = SocketIO()

@socketio.on('add_message')
def handle_add_message(data):
    message = db_connection.add_message(data['message'], data['channel'])
    emit('message_added', message)

@socketio.on('update_messages')
def handle_update_message(data):
    messages = db_connection.get_table(data['channel'])
    emit('message_list', messages)

@socketio.on('update_channel_list')
def handle_update_channels():
    channels = db_connection.get_table('channels')
    emit('channel_list', channels)

@socketio.on('add_channel')
def handle_add_channel(data):
    new_channel = db_connection.add_channel(data)
    emit ('channel_added', new_channel)