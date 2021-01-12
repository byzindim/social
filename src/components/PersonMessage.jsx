
import React from 'react';
import '../App.css';

const MessageItem = (props) => {
    return (
        <div className="message">
            {props.message}</div>
    )
}

export default function PersonMessage(props) {

    let messageElements = props.messagesData.map(message => {
        return <MessageItem
            message={message.message}
        />
    })
    return (
        <div className="person-list-content">
            {messageElements}
        </div>
    )
}