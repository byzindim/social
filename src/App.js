import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';


let App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  )
}

export default App;