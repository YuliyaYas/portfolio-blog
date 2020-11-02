import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
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
import CV from '../src/components/CV';
import { useHistory } from "react-router-dom";

const slugify = require('slugify');

const allData = [
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
  let history = useHistory();

  useEffect(() => {
    const hash = history.location.hash;
    if( hash){
      const artName = hash.substring(1).replace(/-/g, " ");
      setName(artName);
      const gallery = history.location.pathname.substring(1);
      const currentGallery = allData.filter(data => data.type === gallery)[0].data;
      const info = currentGallery.filter(data => data.name === artName)[0];
      setInfo(info);
      setClosed(false);
      setCurrentGallery(currentGallery)
    }
  }, []);

  useEffect(() => {
    const id = currentGallery.findIndex(art => art.name === name);
    if (currentGallery.length-1 === id && id !==-1) {
      setRightArrow(false);
    } else if (id === 0 && id !==-1){
      setLeftArrow(false);
    } else {
      setRightArrow(true);
      setLeftArrow(true);
    }
  }, [currentGallery, name])

  const handleImageClick = (e) => {
      const title = e.target.title;
      setName(title);
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
    if (arrow === "right-arrow") {
      const newName = currentGallery[id+1].name;
      setName(newName)
      setInfo(currentGallery[id+1]);
      history.push(`#${slugify(newName)}`)

    }
    if (arrow === "left-arrow") {
      const newName = currentGallery[id-1].name;
      setName(newName)
      setInfo(currentGallery[id-1]);
      history.push(`#${slugify(newName)}`)
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
          <Route path={`/about-bio`} component={ () => <About/>} />
          <Route path={`/about-cv`} component={ () => <CV/>} />
          <Route path={`/`} component={ () => <HomePage />} /> 
        </Switch>
    </div>
  </div>
  );
}

export default App;
