import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <Header/>

      <section id="about">
        <div className="wrapper">
          <h2 class="sub-header">About Me</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda a magni ipsa, porro possimus et recusandae dolores natus reiciendis itaque magnam in exercitationem accusantium, adipisci, animi voluptatibus ipsam quis error quia. Provident aperiam in magnam! Nostrum assumenda nam autem sunt! Id doloremque nobis deleniti, quidem pariatur, cupiditate eos provident optio assumenda itaque corrupti. Repellendus sit aspernatur voluptates, itaque magni quos ab. Quis placeat officia ipsum ut, culpa hic voluptates. Sunt fugit itaque quae natus.</p>

        </div>
      </section>
      
      <section id="art">
        <div className="wrapper">
          <h2 class="sub-header">My Art</h2>
          <ul>
            <li><p>1</p></li>
            <li><p>2</p></li>
            <li><p>3</p></li>
            <li><p>4</p></li>
            <li><p>5</p></li>
            <li><p>6</p></li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper">
          <h2 class="sub-header">Contact Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit. Sed rerum alias perferendis voluptatum, minima fugit numquam rem recusandae repudiandae sapiente temporibus nulla harum?</p>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
