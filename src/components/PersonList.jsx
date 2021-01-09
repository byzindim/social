
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className="person-item">
            <NavLink to={path}><li>{props.name}</li></NavLink></div>
    )
}
export default function PersonList(props) {
    let dialogsData = [
        { id: 1, name: 'Dim' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Misha' },
        { id: 4, name: 'Vlad' },
        { id: 5, name: 'Sem' },
    ]
    let dialogElements = dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    return (
        <div className="person-list-content">
            {dialogElements}
        </div>
    )
}