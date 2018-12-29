import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import Paintings from '../src/components/Paintings.js';
import Illustrations from '../src/components/Illustrations.js';
import Printmaking from '../src/components/Printmaking.js';
import Sculptures from '../src/components/Sculptures.js';
import Contact from '../src/components/Contact.js';
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
              <h4><a href="/paintings">PAINTINGS<i className="arrow right"></i></a></h4>
              <h4><a href="/illustrations">ILLUSTRATIONS<i className="arrow right"></i></a></h4>
              <h4>DRAWINGS<i className="arrow right"></i></h4>
              <h4><a href="/printmaking">PRINTMAKING<i className="arrow right"></i></a></h4>
              <h4><a href="/sculptures">SCULPTURES</a></h4>
              <h4>PHOTOGRAPHY<i className="arrow right"></i></h4>
            </div>
            <div id="contact">
              <h4 id="about"><a href="/about">ABOUT</a></h4>
              <h4><a href="/contact">CONTACT</a></h4>
              <a href="https://www.instagram.com/yuliyas.art/" target="_blank"><h4>INSTAGRAM</h4></a>
            </div>
          </div>
          <div className="column-2">
            <Switch>
              <Route path={`/contact`} component={ () => <Contact/>} />
              <Route path={`/paintings`} component={ () => <Paintings/>} />
              <Route path={`/illustrations`} component={ () => <Illustrations/>} />
              <Route path={`/printmaking`} component={ () => <Printmaking/>} />
              <Route path={`/sculptures`} component={ () => <Sculptures/>} />
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
