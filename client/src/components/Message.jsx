const Message = ({ username, message, time }) => {

    return(
        <div className='message-container'>
            <span>{username}:</span>
            <span>{message}</span>
            <span> - [{time}]</span>
        </div>
    );
}

export default Message;