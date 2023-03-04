from src import create_app

app = create_app()

@app.get('/api/messages')
def return_current_messages():
    return 'Message returned.'

@app.post('/api/messages')
def create_message():
    return 'Message created.'

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