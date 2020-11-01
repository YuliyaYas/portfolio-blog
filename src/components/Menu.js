import React from 'react';
import '../stylesheet/Menu.scss';

const Menu = (props) => {
  return(
    <nav className="menu-container">
    <div className="menu">
        <a href="/"><img id="logo" src={require("../imgs/logo_yy.png")} alt="logo"/></a>
        <ul className="menu-top">
        <li><a href="/">HOME</a></li>
        <li><a href="/paintings">PAINTINGS</a></li>
        <li><a href="/illustrations">ILLUSTRATIONS</a></li> 
        <li className="dropdown">OTHER
            <ul>
            <li><a href="/drawings">DRAWINGS</a></li>

            <li><a href="/printmaking">PRINTMAKING</a></li>
              {/* <li><a href="/sculptures">SCULPTURES</a></li> */}
              <li><a href="/photography">PHOTOGRAPHY</a></li>
              {/* <li><a href="https://yuliyasart.redbubble.com/" target="_blank" rel="noopener noreferrer">SHOP PRINTS</a></li> */}
            </ul>        
            </li>
        <li className="dropdown">ABOUT
        <ul>
          <li><a href="/about-bio">BIO</a></li>
          <li><a href="/about-cv">CV</a></li>
        </ul>
        </li>
        <li>
          <a href="/contact">
              CONTACT
          </a>
        </li>
        <li>
            <a href="https://www.instagram.com/yuliyas.art/" target="_blank" rel="noopener noreferrer">
                <img id="icons" src={require("../imgs/ig.png")} alt="instagram"/>
            </a>
        </li>
        </ul>
        <div className="mobile-menu">
         <a href="/"><img id="logo-mobile" src={require("../imgs/logo_yy.png")} alt="logo"/></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu" id="menu-1">
        <li><a href="/">HOME<i className="right"></i></a></li>
        <li><a href="/paintings">PAINTINGS<i className="right"></i></a></li>
        <li><a href="/illustrations">ILLUSTRATIONS<i className="right"></i></a></li>
        <li><a href="/drawings">DRAWINGS<i className="right"></i></a></li>
        <li><a href="/printmaking">PRINTMAKING<i className="right"></i></a></li>
        {/* <li><a href="/sculptures">SCULPTURES<i className="right"></i></a></li> */}
        <li><a href="/photography">PHOTOGRAPHY<i className="right"></i></a></li>
        {/* <li><a href="https://yuliyasart.redbubble.com/" target="_blank" rel="noopener noreferrer">SHOP PRINTS<i className="right"></i></a></li> */}
        <li><a href="/about">ABOUT<i className="right"></i></a></li>
        <li><a href="/contact">CONTACT<i className="right"></i></a></li>
        <li><a href="https://www.instagram.com/yuliyas.art/" target="_blank" rel="noopener noreferrer">INSTAGRAM<i className="right"></i></a></li>
        </ul>
      </div>
      <hr></hr>
    </div>
    </nav>
  );
};


export default Menu;
