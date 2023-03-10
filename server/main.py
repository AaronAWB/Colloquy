from flask import request

from src import create_app
from src.database import get_table, add_message

app = create_app()

@app.route('/api/messages', methods = ['GET'])
def return_messages():
    table = get_table('messages')
    if table is not None:
        return table, 200
    else:
        return 'There are no messages.', 404
    
    
@app.route('/api/messages', methods = ['POST'])
def create_message():
    add_message()
    return 'Message added.', 200

@app.route('/api/users', methods = ['GET'])
def get_users():
    table = get_table('users')
    if table is not None:
        return table, 200
    else:
        return 'There are no users.', 404

@app.route('/api/users/<id>', methods = ['GET'])
def get_user(users, id):
    for user in users:
        if user["id"] == id:
            return user
    return "No user with that ID found.", 404

@app.route('/api/users', methods = ['POST'])
def create_user():
    request_data = request.json
    users.append(request_data)
    return 'User added.', 201

if __name__ == '__main__':
    app.run(debug=True)