import React, { Component } from 'react';
import '../stylesheet/Home.css';

const Header = () =>  {
      return(
        <div id="home">
          <img id="home-img" src={require("../imgs/octopus.png")}/>
        </div>
      );
};

export default Header;
