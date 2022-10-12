import React from 'react';

const MessageDisplay = (props) => {
    return (
        <div>
            <h1>Current Message</h1>
           {/* se extrae el nuevo valor de message a través del props */}
            <pre>{props.message}</pre>
        </div>
    );
}

export default MessageDisplay;
