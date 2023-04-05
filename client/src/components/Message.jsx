const Message = ({ username, message }) => {

    const date = new Date(timestamp);
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return(
        <div className='message-container'>
            <span>{username}:</span>
            <span>{message}</span>
            <span>[{timeString}]</span>
        </div>
    );
}

export default Message;