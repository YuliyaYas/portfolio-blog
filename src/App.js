import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from '../src/components/HomePage';
import Menu from '../src/components/Menu';
import About from '../src/components/About';
import Artworks from '../src/components/Artworks';
import Contact from '../src/components/FormContactUs';
import paintingsData from '../src/data/paintings.json';
import paintings2022Data from '../src/data/paintings-ethno.json';
import drawingsData from '../src/data/drawings.json';
import illustrationsData from '../src/data/illustrations.json';
import printmakingData from '../src/data/printmaking.json';
import sculpturesData from '../src/data/sculptures.json';
import photographyData from '../src/data/photography.json';
import CV from '../src/components/CV';

const slugify = require('slugify');

const allData = [
  {type: 'illustrations', data: illustrationsData},
  {type: 'paintings', data: paintingsData},
  {type: 'paintings-ethno', data: paintings2022Data},
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;
    if( hash){
      const artName = hash.substring(1).replace(/-/g, " ");
      setName(artName);
      const gallery = location.pathname.substring(1);
      const currentGallery = allData.filter(data => data.type === gallery)[0].data;
      const info = currentGallery.filter(data => data.name === artName)[0];
      setInfo(info);
      setClosed(false);
      setCurrentGallery(currentGallery)
    }
    window.scrollTo(0, 0);

  }, [location.hash, location.pathname]);

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
    if(e.target.name){
      const title = e.target.title.replace(/-/g, " ");
      setName(title);
      const galleryType = e.target.name;
      const currentGallery = allData.filter(data => data.type === galleryType)[0].data;
      let info = currentGallery.filter(data => data.name === title)[0];
      setCurrentGallery(currentGallery);
      setInfo(info);
    }
    //for featured on homepage
    if(e.target.alt === 'rushnyk'){
      const info={type: "paintings", name: "", description: "", url: "rushnyk.jpg", specs: ""}
      setInfo(info)
    }

    if(e.target.alt === 'Rooster'){
      const info={type: "paintings", name: "", description: "", url: "rooster.jpg", specs: ""}
      setInfo(info)
    }

    setClosed(false);

  }

  const handleArrowClick = (e) => {
    const arrow = e.target.id;
    const id = currentGallery.findIndex(art => art.name === name);
    if (arrow === "right-arrow") {
      const newName = currentGallery[id+1].name;
      setName(newName)
      setInfo(currentGallery[id+1]);
      navigate(`#${slugify(newName)}`)

    }
    if (arrow === "left-arrow") {
      const newName = currentGallery[id-1].name;
      setName(newName)
      setInfo(currentGallery[id-1]);
      navigate(`#${slugify(newName)}`)
    }
  }

  const handleCloseClick = () => {
      setClosed(true);
  }

  return (
    <div>
      <Menu /> 
    <div className="content">
        <Routes>
          <Route path="/contact" element={<Contact/>} />
          {allData.map(art => {
            return  <Route key={art.type} path={`/${art.type}/`} element={<Artworks closed={closed} rightArrow={rightArrow} info={info} data={art.data} leftArrow={leftArrow} handleArrowClick={handleArrowClick} handleImageClick={handleImageClick} handleCloseClick={handleCloseClick}/>} />
          })}
          <Route path="/about-bio" element={<About/>} />
          <Route path="/about-cv" element={<CV/>} />
          <Route path="/" element={<HomePage info={info} closed={closed} handleCloseClick={handleCloseClick} handleImageClick={handleImageClick}/>} /> 
        </Routes>
    </div>
  </div>
  );
}

export default App;
