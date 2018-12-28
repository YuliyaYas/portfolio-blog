import React, { Component } from 'react';
import '../stylesheet/Home.css';

const Header = () => {

      return(
        <div className="content">
          <img id="logo" src={require("/Users/yuliya.yasenetska/personal/portfolio/src/imgs/logo.png")} />
          <div id="about">ABOUT</div>
        </div>
      );
};

export default Header;
