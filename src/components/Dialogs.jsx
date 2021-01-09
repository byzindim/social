
import React from 'react';
import '../App.css';
import PersonList from './PersonList';
import PersonMessage from './PersonMessage';

export default function Dialogs() {
    return (
        <div className="dialog-content">
            <div className="wrapper-person-list">
                <PersonList />
            </div>
            <div className="wrapper-person-message">
                <PersonMessage />
            </div>

        </div>
    )
}