import '@Styles/Message.css'

const Message = ({ username, message, time }) => {

    return(
        <div className='message-container'>
            <div className='message-content'>
                <span className='username'>{username}: </span>
                <span className='message'>{message}</span>
                <span className='time'> - [{time}]</span>
            </div>
        </div>
    );
}

export default Message;