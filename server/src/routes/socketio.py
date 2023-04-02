from flask_socketio import SocketIO, emit
from src.lib.db_connection import db_connection
from src.__init__ import socketio

@socketio.on('add_message')
def handle_add_message(data):
    message_data = db_connection.add_message(data['message'], data['channel'])
    messages = db_connection.get_table(message_data['channel'])
    emit('message_list', messages)

@socketio.on('update_channels')
def handle_update_channels(data):
    channel_data = db_connection.add_channel(data)
    channels = db_connection.get_table('channels')
    emit('channel_list', channels)

socketio = SocketIO()