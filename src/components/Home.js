import React, { Component } from 'react';
import '../stylesheet/Home.css';

const Header = () =>  {
      return(
        <div id="home">
          <img id="home-img" src={require("../imgs/octopus.png")}/>
          <div className="title">
            <p>OCTOVILLE</p>
            <i>30x30inches, acrylic on wooden panel</i>
          </div>
        </div>
      );
};

export default Header;
