import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import Footer from '../src/components/Footer.js';


class App extends Component {
  render() {
    return (
      <div>
      <div className="content">
        <div className="row">
          <div className="column-1">
          <a href="/"><img id="logo" src={require("./imgs/logo.png")} /></a>
            <div id="menu">
              <h4>PAINTINGS<i className="arrow right"></i></h4>
              <h4>ILLUSTRATIONS<i className="arrow right"></i></h4>
              <h4>DRAWINGS<i className="arrow right"></i></h4>
              <h4>PRINTMAKING<i className="arrow right"></i></h4>
              <h4>SCULPTURES</h4>
              <h4>PHOTOGRAPHY<i className="arrow right"></i></h4>
            </div>
            <div id="contact">
              <h4 id="about"><a href="/about">ABOUT</a></h4>
              <h4>CONTACT</h4>
              <h4>INSTAGRAM</h4>
            </div>
          </div>
          <div className="column-2">
            <Switch>
              <Route path={`/about`} component={ () => <About/>} />
              <Route path={`/`} component={ () => <Home />} />
            </Switch>

          </div>
        </div>
      </div>

        <Footer />
      </div>
    );
  }
}

export default App;
