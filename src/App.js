import React, { Component, useState, useEffect } from 'react';
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

const App = () => {
  const [closed, setClosed] = useState(true);
  const [info, setInfo] = useState([]);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [name, setName] = useState('')
  const [rightArrow, setRightArrow] = useState(true)
  const [leftArrow, setLeftArrow] = useState(true)
  useEffect(() => {
    const hash = window.location.hash;
    if( hash){
      const artName = hash.substring(1).replace(/%20/g, " ");
      setName(artName);
      const gallery = window.location.pathname.substring(1);
      const currentGallery = allData.filter(data => data.type === gallery)[0].data;
      const info = currentGallery.filter(data => data.name === artName)[0];
      setInfo(info);
      setClosed(false);
      setCurrentGallery(currentGallery)
    }
  }, []);

  const handleImageClick = (e) => {
      const title = e.target.title;
      setName(title);
      console.log(title)
      const galleryType = e.target.name;
      const currentGallery = allData.filter(data => data.type === galleryType)[0].data;
      let info = currentGallery.filter(data => data.name === title)[0];
      // window.scroll({
      //   top: 0, 
      //   left: 0, 
      //   behavior: 'smooth'
      // });
      setClosed(false);
      setCurrentGallery(currentGallery);
      setInfo(info);
  }

  const handleArrowClick = (e) => {
    const arrow = e.target.id;
    const id = currentGallery.findIndex(art => art.name === name);
    console.log(currentGallery.length, id)
    if (currentGallery.length === id+2) {
      setRightArrow(false);
    } else if (id === 1){
      setLeftArrow(false);
    } else {
      setRightArrow(true);
      setLeftArrow(true);
    }
    if (arrow === "right-arrow") {
      setName(currentGallery[id+1].name)
      setInfo(currentGallery[id+1]);
    }
    if (arrow === "left-arrow") {
      setName(currentGallery[id-1].name)
      setInfo(currentGallery[id-1]);
    }
  }

  const handleCloseClick = () => {
      setClosed(true);
  }

  return (
    <div>
      <Menu /> 
    <div className="content">
        <Switch>
          <Route path={`/contact`} component={ () => <Contact/>} />
          {allData.map(art => {
            return  <Route key={art.type} path={`/${art.type}/`} component={ () => <Artworks closed={closed} rightArrow={rightArrow} info={info} data={art.data} leftArrow={leftArrow} handleArrowClick={handleArrowClick} handleImageClick={handleImageClick} handleCloseClick={handleCloseClick}/>} />
          })}
          <Route path={`/about`} component={ () => <About/>} />
          <Route path={`/`} component={ () => <HomePage />} /> 
        </Switch>
    </div>
  </div>
  );
}

export default App;
