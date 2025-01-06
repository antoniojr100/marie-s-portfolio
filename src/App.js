import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Art from './Art.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <Header/>

      {/* <About/> */}
      
      <Art/>

      {/* <Contact/> */}

      <Footer/>
    </div>
  );
}

export default App;
