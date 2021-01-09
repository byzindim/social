
import React from 'react';
import '../App.css';

const MessageItem = (props) => {
    return (
        <div className="message">
            {props.message}</div>
    )
}

export default function PersonMessage() {
    let messagesData = [
        { id: 1, message: 'Javascript' },
        { id: 2, message: 'React.js' },
        { id: 3, message: 'Redux' },
        { id: 4, message: 'MobX' },
        { id: 5, message: 'TypeScript' },
    ]
    let messageElements = messagesData.map(message => {
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