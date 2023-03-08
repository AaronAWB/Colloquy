from flask import request

from src import create_app
from src.database import get_table

app = create_app()

@app.route('/api/messages', methods = ['GET'])
def return_messages():
    return get_table('messages'), 200
    
# @app.route('/api/messages', methods = ['POST'])
# def create_message():
#     request_data = request.json
#     messages.append(request_data)
#     return 'Message added.', 200

@app.route('/api/users', methods = ['GET'])
def get_users(users):
    return src.database.get_table(users), 200

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