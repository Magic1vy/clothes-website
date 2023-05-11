import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './App.css';

function App() {

  return (
<Router>
      <nav>
       <Link className='link'  to="/">Shop</Link>
       <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
      </nav>
      <Routes> 
      <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/contact" element = {<Contact />}/>
      </Routes> 
     </Router> 

  );
}

export default App;