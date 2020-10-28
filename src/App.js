import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from '../src/components/HomePage';
import Menu from '../src/components/Menu';
import About from '../src/components/About';
import Artworks from '../src/components/Artworks';
import Contact from '../src/components/FormContactUs';
import paintingsData from '../src/data/paintings.json';
import drawingsData from '../src/data/drawings.json';
import illustrationsData from '../src/data/illustrations.json';
import printmakingData from '../src/data/printmaking.json';
import sculpturesData from '../src/data/sculptures.json';
import photographyData from '../src/data/photography.json';
var slugify = require('slugify');

var allData = [
  {type: 'illustrations', data: illustrationsData},
  {type: 'paintings', data: paintingsData},
  {type: 'drawings', data: drawingsData},
  {type: 'printmaking', data: printmakingData},
  {type: 'sculptures', data: sculpturesData},
  {type: 'photography', data: photographyData}
  ];

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
      console.log(title, galleryType);
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
          this.setState({info}, () => this.props.history.push(`/${galleryType}/#${slugify(title)}`));
      });
  }

  handleArrowClick = (e) => {
    const arrow = e.target.alt;
    const cur_id = this.state.info.id;
    // const first = this.state.currentGallery[0];
    const length = this.state.currentGallery.length-1;
    if (arrow === "left" && cur_id === 0){
      const next = this.state.currentGallery[length];
      this.setState({info: next}, () => {
        this.props.history.push(`/${this.state.galleryType}/#${slugify(this.state.info.name)}`)
      });
    } else if (arrow === "right" && cur_id === length){
      const next = this.state.currentGallery[0];
      this.setState({info: next}, () => {
        this.props.history.push(`/${this.state.galleryType}/#${slugify(this.state.info.name)}`)
      });
    } else if (arrow === "right"){
      const next =this.state.currentGallery[cur_id+1];
      this.setState({info: next}, () => {
        this.props.history.push(`/${this.state.galleryType}/#${slugify(this.state.info.name)}`)
      });
    } else if (arrow === "left"){
      const prev = this.state.currentGallery[cur_id-1];
      this.setState({info: prev}, () => {
        this.props.history.push(`/${this.state.galleryType}/#${slugify(this.state.info.name)}`)
      });
    }
  }

  handleCloseClick = (e) => {
      this.setState({closed: true});
  }


  render() {
    return (
      <div>
        <Menu /> 
      <div className="content">
          <Switch>
            <Route path={`/contact`} component={ () => <Contact/>} />
            {allData.map(art => {
              return  <Route key={art.type} path={`/${art.type}/`} component={ () => <Artworks closed={this.state.closed} info={this.state.info} galleryType={this.state.galleryType} data={art.data} handleArrowClick={this.handleArrowClick} handleImageClick={this.handleImageClick} handleCloseClick={this.handleCloseClick}/>} />
            })}
            <Route path={`/about`} component={ () => <About/>} />
            <Route path={`/`} component={ () => <HomePage />} /> 
          </Switch>
      </div>
    </div>
    );
  }
}

export default App;
