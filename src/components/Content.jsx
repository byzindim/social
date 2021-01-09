
import React from 'react';
import '../App.css';
import Posts from './Posts';
import ContentInfo from './ContentInfo';
export default function Content() {
    return (
        <nav className="wrapper-content">
            <ContentInfo />

            <div className="post">
                <Posts />

            </div>

        </nav>
    )
}
