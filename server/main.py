from flask import Flask, request
from src import create_app

app = create_app()

messages = [
    {
        "User": "AaronAWB",
        "Message": "This is a test message."
    },
    {
        "User": "SecondUser",
        "Message": "This is a message in response to the test message"
    }
]

@app.route('/api/messages', methods = ['GET'])
def return_current_messages():
    return messages, 200

@app.route('/api/messages', methods = ['POST'])
def create_message():
    request_data = request.json
    messages.append(request_data)
    return 'Message added', 200

@app.get('/api/users')
def get_users():
    return 'All users returned.'

@app.get('/api/users/<id>')
def get_user():
    return 'Single user returned.'

@app.post('/api/users')
def create_user():
    return 'New user created.'

if __name__ == '__main__':
    app.run(debug=True)