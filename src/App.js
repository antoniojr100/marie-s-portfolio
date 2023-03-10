import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      
      <header>
        <div className="wrapper">
        
          <h1>Mary's Portfolio</h1>
          
          <nav>
            <ul>
              <li>About Me</li>
              <li>My Art</li>
              <li>Contact Me</li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about">
        <div className="wrapper">
          <h2>About Me</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda a magni ipsa, porro possimus et recusandae dolores natus reiciendis itaque magnam in exercitationem accusantium, adipisci, animi voluptatibus ipsam quis error quia. Provident aperiam in magnam! Nostrum assumenda nam autem sunt! Id doloremque nobis deleniti, quidem pariatur, cupiditate eos provident optio assumenda itaque corrupti. Repellendus sit aspernatur voluptates, itaque magni quos ab. Quis placeat officia ipsum ut, culpa hic voluptates. Sunt fugit itaque quae natus.</p>

        </div>
      </section>
      
      <section id="art">
        <div className="wrapper">
          <h2>My Art</h2>
          <ul>
            <li><p>1</p></li>
            <li><p>2</p></li>
            <li><p>3</p></li>
            <li><p>4</p></li>
            <li><p>5</p></li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper">
          <h2>Contact Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit. Sed rerum alias perferendis voluptatum, minima fugit numquam rem recusandae repudiandae sapiente temporibus nulla harum?</p>
        </div>
      </section>

      <footer>
        <div className="wrapper">
          <p>Made by Antonio Arredondo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
