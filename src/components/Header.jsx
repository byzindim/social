
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
export default function Header() {
    return (
        <div className="wrapper-header">
            <NavLink to="/">Hello</NavLink>
        </div>
    )
}
