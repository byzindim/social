
import React from 'react';
import '../App.css';
import Posts from './Posts';
import ContentInfo from './ContentInfo';
export default function Content(props) {

    return (
        <nav className="wrapper-content">
            <ContentInfo />

            <div className="post">
                <Posts postsPerson={props.postsPerson} />

            </div>

        </nav>
    )
}
