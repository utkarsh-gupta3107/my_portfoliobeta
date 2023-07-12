import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';
const Layout = () => {
  return (
    <div>    
      <nav id="main-nav">
      <div class="row">
        <div class="container">
  
          <div class="logo">
            <a href="/"><img src="images/myport.png" alt="logo"/></a>
          </div>
  
          <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>
  
          <ul class="nav-menu list-unstyled">
            <li>
           <a href="/" class="smoothScroll">Home</a>
          </li>
          <li>
            <Link to="/WebDev">Web Dev</Link>
          </li>
          <li>
            <Link to="/Academics">Academics</Link>
          </li>
          <li>
            <Link to="/consulting">Consulting</Link>
          </li>
          <li>
            <Link to="/cover">Cover</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/linkedin">LinkedIn</Link>
          </li>
          <li>
          {/* <Link to="#footer">Contact</Link> */}
          <a href='#footer'>Contact</a>
          </li>
          </ul>
  
        </div>
      </div>
    </nav>
      <Outlet />
      {/* <Footer/> */}

    </div>
  )
}

export default Layout
