import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
function Home(props) {


    return (
        <div className="wrapper-home">
            <Header />
            <Nav />
            <Content postsPerson={props.postsPerson} />
            <Footer />

        </div>
    );
}

export default Home;