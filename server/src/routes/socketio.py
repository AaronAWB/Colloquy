from src.lib.db_connection import db_connection

@socketio.on('add_message')
def handle_add_message(data):
    print(data)
    messageContent = data['message']
    channel = data['channel']
    userId = data['userId']
    message = db_connection.add_message(messageContent, channel, userId)
    print(message)
    socketio.emit('message_added', message, broadcast=True)

@socketio.on('update_messages')
def handle_update_messages(data):
    messages = db_connection.get_table(data['channel'])
    socketio.emit('updated_message_list', messages, broadcast=True)

@socketio.on('update_channel_list')
def handle_update_channels():
    channels = db_connection.get_table('channels')
    socketio.emit('updated_channel_list', channels, broadcast=True)

@socketio.on('add_channel')
def handle_add_channel(data):
    new_channel = db_connection.add_channel(data)
    socketio.emit ('channel_added', new_channel, broadcast=True)