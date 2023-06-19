import logo from './logo.svg';
import './App.css';
import smiling from './image/smiling.jpg' ;
import face from './image/face.jpg';
import link from './image/link.png';
import github from './image/github.png';
import gmail from './image/gmail.png';
import aot from './image/aot.jpg';
import desk from './image/desk.png';
import Flutter from './image/Flutter.png';
import ever from './image/ever.png';
import sunny from './image/sunny.png';
import calc from './image/calc.png';
import o from './image/o.png';
import advice from './image/advice.jpg';
import stay from './image/stay.jpg';
import javascript from './image/javascript.jpg';
import html from './image/html.png';
import React1  from './image/react1.png';
import c from './image/c.png';
import cchar from './image/cchar.png';
import node from './image/node.png';
import css from './image/css1.jpg';
import flutter1 from './image/flutter1.jpg'
import { FaFacebook, FaGithub, FaLinkedin, FaReact, FaRegSmile } from 'react-icons/fa';

function App() {
  return (
    <body>
    <header className='header'> 
      <a href='#' className='logo'>
         ProtoFolio
      </a>
      <nav className='NavBar'>
          <a href='#'>
               Home
          </a>
          <a href='#'>
               About 
          </a>
          <a href='#'>
               Service
          </a>
          <a href='#'>
               protofolio
          </a>
          <a href='#'>
               Skills
          </a>
          <a href='#'>
               Contact
          </a>
      </nav>
    </header>
    <section className='home'>
           <div className='home-content'>
                  <h3>
                    Hello, It's me
                  </h3>
                  <h1>Ali Zerrouki Aya</h1>
                  <h3>and I'm a</h3>
                  <p> Computer science student, i' have a medium <br/>
                    background in web ,mobile app and desctop app devolpment</p>
                    <div className='social'>
              <FaFacebook/>
               <FaLinkedin/>
            <FaGithub/>
              <FaRegSmile/>
           </div>
           <button className='dow'> Downoald CV</button>
           </div>
           <div className='home-image'>
                  <img src='./image/smiling.jpg'/>
                 
           </div>
          
      </section>
     <section className='about'>
      <div className='a-image'>
      <img src='./image/aot.jpg'/>
      </div>
      <div className='a-paragraph'>
      <h2  className='head'>About </h2>
      
             <p>I'm Ali Zerrouki Aya, a computer science Student in the first year I have ability of creating a web application , mobile application and
                    desktop application , I'm passion about learning new technologies and tools</p>
                    <button>Read More</button>
                    </div>
     </section>
     <section className='service'>
      <h2><span>My </span>Services</h2>
      <div className='service-Container'>
        <div className='service-box b1'>
           <img src='./image/Web.jpg'/>
           <h3>Web devolpment</h3>
           <p>I have the ability of creating a simple  responsive website </p>
           <a href='#'>  <button className='btn'>Read More</button></a>
        </div>
        <div className='service-box b2'>
           <img src='./image/Flutter.png'/>
           <h3>Mobile devolpment</h3>
           <p>I have the ability of creating a simple  mobile apllication using dart  </p>
           <a href='#'>  <button className='btn'>Read More</button></a>
        </div>
        <div className='service-box b3'>
           <img src='./image/desk.png'/>
           <h3>Desctop devolpment</h3>
           <p>I have the ability of creating a simple desktop application </p>
           <a href='#'>  <button className='btn'>Read More</button></a>
        </div>
     
     
      </div>
     </section>
     <section className='protofolio'>
      <h2><span>Latest</span>  Project</h2>
      <div className='protofolio-Container'>
          <div className='profil-box1'>
                 <img className='i' src='./image/ever.png'/>
          </div>
          <div className='profil-box1'>
                 <img className='i' src='./image/sunny.png'/>
          </div>
          <div className='profil-box1'>
                 <img className='i' src='./image/calc.png'/>
          </div>
          <div className='profil-box1'>
                 <img className='i' src='./image/o.png'/>
          </div>
          <div className='profil-box1'>
                 <img className='i' src='./image/advice.jpg'/>
          </div>
          <div className='profil-box1'>
                 <img className='i' src='./image/stay.jpg'/>
          </div>
          
      </div>
     </section>
     <section className='Skills'>
       <h2>
              Skills
       </h2>
       <div className='skill-container'>
              <div className='skill-item1'>
              <img src='./image/javascript.jpg'/>
              </div>
              <div className='skill-item1'>
              <img src='./image/html.png'/>
              </div>
              <div className='skill-item1'>
              <img src='./image/react1.png'/>
              </div>
              <div className='skill-item1'>
              <img src='./image/c.png'/>
              </div>
              <div className='skill-item1'>
              <img src='./image/cchar.png'/>
              </div>
              <div className='skill-item1'>
                     <img src='./image/css1.jpg'/>
              </div>
              <div className='skill-item1'>
                     <img src='./image/flutter1.jpg'/>
              </div>
       </div>
     </section>
         <section className='contact'>
              <h2 className='heading'>Contact<span>Me!</span> </h2>
              <form>
                     <div className='input-box'>
                            <input type='text' placeholder='Full Name'/>
                             <input type='email' placeholder='Email Adress'/>
                             </div>
                             <div className='input-box'>
                                   <input type=' number' placeholder='Mobile Number'/>
                                   <input type='text' placeholder='Email Subject'/>
                     </div>
                     <textarea name='' id='' cols='30' rows='10' placeholder='Your Message'></textarea>
                     <input type='submit' value='send message ' className='btn'></input>
              </form>
         </section>
    </body> 
  );
}

export default App;
