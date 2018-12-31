import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import Paintings from '../src/components/Paintings.js';
import Illustrations from '../src/components/Illustrations.js';
import Printmaking from '../src/components/Printmaking.js';
import Sculptures from '../src/components/Sculptures.js';
import Photography from '../src/components/Photography.js';
import Drawings from '../src/components/Drawings.js';
import Contact from '../src/components/Contact.js';
import Footer from '../src/components/Footer.js';
import paintingsData from '/Users/yuliya.yasenetska/personal/portfolio/src/data/paintings.json';


class App extends Component {
  constructor(){
    super()
    this.state = {
      closed: true,
      name: '',
      info: [],
      currentGallery: []
    }
  }

  handlePaintingClick = (e) => {
      let title = e.target.title;
      this.setState({closed: false, name: e.target.title, currentGallery: paintingsData}, () => {
          let info = this.state.currentGallery.filter((img, i) => img.name === this.state.name)[0];
          this.setState({info});
      });
  }

  handleArrowClick = (e) => {
    const arrow = e.target.alt;
    const cur_id = this.state.info.id;
    const first = this.state.currentGallery[0];
    const length = this.state.currentGallery.length-1;

    if (arrow === "left" && cur_id === 0){
      const next = this.state.currentGallery[length];
      this.setState({info: next})
    } else if (arrow === "right" && cur_id === length){
      const next =this.state.currentGallery[0];
      this.setState({info: next})
    } else if (arrow === "right"){
      const next =this.state.currentGallery[cur_id+1];
      this.setState({info: next})
    } else if (arrow === "left"){
      const prev =this.state.currentGallery[cur_id-1];
      this.setState({info: prev})
    }
  }

  handleCloseClick = (e) => {
      this.setState({closed: true});
  }


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
              <h4><a href="/drawings">DRAWINGS<i className="arrow right"></i></a></h4>
              <h4><a href="/printmaking">PRINTMAKING<i className="arrow right"></i></a></h4>
              <h4><a href="/sculptures">SCULPTURES<i className="arrow right"></i></a></h4>
              <h4><a href="/photography">PHOTOGRAPHY<i className="arrow right"></i></a></h4>
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
              <Route path={`/paintings`} component={ () => <Paintings closed={this.state.closed} info={this.state.info} handleArrowClick={this.handleArrowClick} handlePaintingClick={this.handlePaintingClick} handleCloseClick={this.handleCloseClick}/>} />
              <Route path={`/illustrations`} component={ () => <Illustrations/>} />
              <Route path={`/printmaking`} component={ () => <Printmaking/>} />
              <Route path={`/sculptures`} component={ () => <Sculptures/>} />
              <Route path={`/photography`} component={ () => <Photography/>} />
              <Route path={`/drawings`} component={ () => <Drawings/>} />
              <Route path={`/about`} component={ () => <About/>} />
              <Route path={`/`} component={ () => <Home />} />
            </Switch>

          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
