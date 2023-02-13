import React from 'react';
import './Chat.css'

const Chat = () => {
    return(
        <div className='container chat-page-container'>
            <div className ='container active-users-container'>
                <h3>Active Users</h3>
            </div>
            <div className ='container chat-container'>
                <h3>Chat</h3>
            </div>
            <h1>This is the chat page.</h1>
        </div>
    );
}

export default Chat