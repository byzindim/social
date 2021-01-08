
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
export default function Nav() {
    return (
        <nav className="wrapper-nav">
            <div><a>Profile</a></div>
            <div><NavLink to="/dialog">Messages</NavLink></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )
}
