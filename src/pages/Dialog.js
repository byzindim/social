import React from 'react';
import Dialogs from '../components/Dialogs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

function Dialog() {
    return (
        <div className='wrapper-dialog'>
            <Header />
            <Nav />
            <Dialogs />
            <Footer />
        </div>
    );
}

export default Dialog;
