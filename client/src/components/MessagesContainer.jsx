import { useRef, useEffect } from "react";
import "@Styles/MessagesContainer.css";

function MessagesContainer({ content }) {
    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, []);

    useEffect(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [content]);

    return (
        <div ref={containerRef} className='messages-container'>
            {content}
        </div>
    );
}

export default MessagesContainer;