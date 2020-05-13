import React from 'react';
import '../stylesheet/Menu.scss';

const Menu = (props) => {
  return(
    <div >
        <a href="/"><img id="logo" src={require("../imgs/logo_yy.png")} alt="logo"/></a>
        <ul className="menu-top">
        <li><a href="/">HOME</a></li>
        <li><a href="/paintings">PAINTINGS</a></li>
        <li><a href="/illustrations">ILLUSTRATIONS</a></li>
        <li><a href="/illustrations">OTHER</a></li>
{/* 
        <li><a href="/drawings">DRAWINGS</a></li>
        <li><a href="/printmaking">PRINTMAKING</a></li> */}
        {/* <li><a href="/sculptures">SCULPTURES</a></li> */}
        {/* <li><a href="/photography">PHOTOGRAPHY</a></li> */}
        <li><a href="https://yuliyasart.redbubble.com/" target="_blank" rel="noopener noreferrer">SHOP</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li>
            <a href="https://www.instagram.com/yuliyas.art/" target="_blank" rel="noopener noreferrer">
                <img id="insta" src={require("../imgs/ig.png")} alt="instagram"/>
            </a>
        </li>
        </ul>
    </div>
  );
};


export default Menu;
