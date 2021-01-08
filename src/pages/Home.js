import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
function Home() {
    return (
        <div className="wrapper-home">
            <Header />
            <Nav />
            <Content />
            <Footer />

        </div>
    );
}

export default Home;