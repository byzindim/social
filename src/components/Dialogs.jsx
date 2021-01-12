
import React from 'react';
import '../App.css';
import PersonList from './PersonList';
import PersonMessage from './PersonMessage';

export default function Dialogs(props) {
    return (
        <div className="dialog-content">
            <div className="wrapper-person-list">
                <PersonList dialogsData={props.dialogsData} />
            </div>
            <div className="wrapper-person-message">
                <PersonMessage messagesData={props.messagesData} />
            </div>

        </div>
    )
}