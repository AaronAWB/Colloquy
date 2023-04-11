const Message = ({ username, message, timestamp }) => {

    return(
        <div className='message-container'>
            <span>{username}:</span>
            <span>{message}</span>
            <span> - [{timestamp }]</span>
        </div>
    );
}

export default Message;