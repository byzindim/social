
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

    let dialogElements = props.dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    return (
        <div className="person-list-content">
            {dialogElements}
        </div>
    )
}