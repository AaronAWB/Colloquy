const Message = ({ username, message }) => {

    return(
        <div className='message-container'>
            <span>{username}:</span>
            <span>{message}</span>
        </div>
    );
}

export default Message;