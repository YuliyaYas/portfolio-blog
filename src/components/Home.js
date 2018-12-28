import React, { Component } from 'react';
import '../stylesheet/Home.css';

class Header extends Component {
      constructor(){
        super();
        this.state = {
          clicked: false
        };
      };

    render(){
      return(
        <div className="content">
          <div className="row">
            <div className="column-1">
            <h4>PAINTINGS</h4>
            <h4>ILLUSTRATIONS</h4>
            <h4>DRAWINGS</h4>
            <h4>PRINTMAKING</h4>
            <h4>SCULPTURES</h4>
            <h4>PHOTOGRAPHY</h4>
            </div>
            <div className="column-2">
              <img id="home-img" src={require("/Users/yuliya.yasenetska/personal/portfolio/src/imgs/octopus.png")}/>
            </div>
          </div>
        </div>
      );
    };
};

export default Header;
