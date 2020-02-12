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
import paintingsData from '../src/data/paintings.json';
import drawingsData from '../src/data/drawings.json';
import illustrationsData from '../src/data/illustrations.json';
import printmakingData from '../src/data/printmaking.json';
import sculpturesData from '../src/data/sculptures.json';
import photographyData from '../src/data/photography.json';
var slugify = require('slugify')

var allData = [{
    'paintings': paintingsData,
    'drawings': drawingsData,
    'illustrations': illustrationsData,
    'printmaking': printmakingData,
    'sculptures': sculpturesData,
    'photography': photographyData
  }];

class App extends Component {
  constructor(){
    super()
    this.state = {
      closed: true,
      name: '',
      info: [],
      currentGallery: [],
      galleryType: ''
    }
  }

  componentDidMount(){
    var path = this.props.history.location.pathname.split("/").filter(Boolean);
    if(path.length > 1){
      var galleryType = path[0];
      var artworkName = path[1].split('-').join(' ');
      this.setState({closed: false, galleryType, }, () => {
        var galleryData = allData[0][`${this.state.galleryType}`];
        let info = galleryData.filter((img, i) => img.name === artworkName)[0];
        
        this.setState({info, name: artworkName, currentGallery: galleryData})
      });


    }
  }

  handleImageClick = (e) => {
      const title = e.target.title;
      const galleryType = e.target.name;
      let currentGallery = '';
      if (galleryType === "paintings"){
        currentGallery = paintingsData;
      } else if (galleryType === "illustrations"){
        currentGallery = illustrationsData;
      } else if (galleryType === "drawings"){
        currentGallery = drawingsData;
      } else if (galleryType === "sculptures"){
        currentGallery = sculpturesData;
      } else if (galleryType === "printmaking"){
        currentGallery = printmakingData;
      } else if (galleryType === "photography"){
        currentGallery = photographyData;
      }
      this.setState({closed: false, name: e.target.title, currentGallery, galleryType}, () => {
          let info = this.state.currentGallery.filter((img, i) => img.name === this.state.name)[0];
          this.setState({info}, () => this.props.history.push(`/${galleryType}/${slugify(title)}`));
      });
  }

  handleArrowClick = (e) => {
    const arrow = e.target.alt;
    const cur_id = this.state.info.id;
    const first = this.state.currentGallery[0];
    const length = this.state.currentGallery.length-1;
    if (arrow === "left" && cur_id === 0){
      const next = this.state.currentGallery[length];
      this.setState({info: next}, () => {
        this.props.history.push(`/${this.state.galleryType}/${slugify(this.state.info.name)}`)
      });
    } else if (arrow === "right" && cur_id === length){
      const next = this.state.currentGallery[0];
      this.setState({info: next}, () => {
        this.props.history.push(`/${this.state.galleryType}/${slugify(this.state.info.name)}`)
      });
    } else if (arrow === "right"){
      const next =this.state.currentGallery[cur_id+1];
      this.setState({info: next}, () => {
        this.props.history.push(`/${this.state.galleryType}/${slugify(this.state.info.name)}`)
      });
    } else if (arrow === "left"){
      const prev = this.state.currentGallery[cur_id-1];
      this.setState({info: prev}, () => {
        this.props.history.push(`/${this.state.galleryType}/${slugify(this.state.info.name)}`)
      });
    }
  }

  handleCloseClick = (e) => {
      this.setState({closed: true});
  }


  render() {
    return (
      <div>
      <div className="content">
      <a href="/" id="z"><img id="logo-mobile" src={require("./imgs/logo_yy.png")} /></a>
      <div className="header-menu">
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
        <li><a href="/about">ABOUT<i className="right"></i></a></li>
        <li><a href="/contact">CONTACT<i className="right"></i></a></li>
        <li><a href="https://www.instagram.com/yuliyas.art/" target="_blank">INSTAGRAM<i className="right"></i></a></li>
        </ul>
      </div>

        <div className="row">
          <div className="column-1">
          <a href="/"><img id="logo" src={require("./imgs/logo_yy.png")} /></a>
            <div id="menu">
              <h4><a href="/paintings/">PAINTINGS<i className="right"></i></a></h4>
              <h4><a href="/illustrations">ILLUSTRATIONS<i className="right"></i></a></h4>
              <h4><a href="/drawings">DRAWINGS<i className="right"></i></a></h4>
              <h4><a href="/printmaking">PRINTMAKING<i className="right"></i></a></h4>
              {/* <h4><a href="/sculptures">SCULPTURES<i className="right"></i></a></h4> */}
              <h4><a href="/photography">PHOTOGRAPHY<i className="right"></i></a></h4>
            </div>
            <div id="contact">
              <h4 id="about"><a href="/">HOME</a></h4>
              <h4 ><a href="/about">ABOUT</a></h4>
              <h4><a href="/contact">CONTACT</a></h4>
              <a href="https://www.instagram.com/yuliyas.art/" target="_blank"><h4>INSTAGRAM</h4></a>
            </div>
          </div>
          <div className="column-2">
            <Switch>
              <Route path={`/contact`} component={ () => <Contact/>} />
              <Route path={`/paintings/`} component={ () => <Paintings closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} paintingsData={paintingsData} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />
              <Route path={`/drawings`} component={ () => <Drawings closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} drawingsData={drawingsData} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />} />
              <Route path={`/illustrations`} component={ () => <Illustrations closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} illustrationsData={illustrationsData} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />} />
              <Route path={`/printmaking`} component={ () => <Printmaking closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} printmakingData={printmakingData} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />} />
              {/* <Route path={`/sculptures`} component={ () => <Sculptures closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} sculpturesData={sculpturesData} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />} /> */}
              <Route path={`/photography`} component={ () => <Photography closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} photographyData={photographyData} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />} />
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
