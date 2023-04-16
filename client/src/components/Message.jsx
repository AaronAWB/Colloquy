import '@Styles/Message.css'

const Message = ({ username, message, isUserMessage }) => {

    return(
        <div className='message-container'>
            <div className={`message-content ${isUserMessage ? ' user-message' : ''}`}>
                <span className='username'>{username}: </span>
                <span classame='message'>{message}</span>
            </div>
        </div>
    );
}

export default Message;