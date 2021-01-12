import React from 'react';
import Dialogs from '../components/Dialogs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

function Dialog(props) {
    return (
        <div className='wrapper-dialog'>
            <Header />
            <Nav />
            <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />
            <Footer />
        </div>
    );
}

export default Dialog;
