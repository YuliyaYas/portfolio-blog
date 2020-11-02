import React, { useState } from 'react';
import Form from '../components/FormContactUs';
import Carousel from '../components/Carousel';
import Overlay from './Overlay';

import '../stylesheet/Homepage.scss';

const HomePage = ({closed, handleImageClick, handleCloseClick, info}) => {

  return(
    <div className="homepage" style={{marginBottom: '100px'}}>
       {closed===true
        ?
        ""
        :
        <Overlay handleCloseClick={handleCloseClick} overlayImg={info} rightArrow={false} leftArrow={false}/>
        }
      <div className="featured"> 
        <h2>Latest Works</h2>
        <div className="featured-img">
          <div className="block-img">
            <img  src={require("../imgs/paintings/heart.jpg")} alt="Heart"
            onClick={handleImageClick}/>
          </div>
          <div className="block-desc">
            <h3>Home</h3>            
            <div className="info-desc"> 24x30inches, acrylic on wood, 2020 </div>
            <br/>
            <p>We all have a home in our hearts, a special place we remember from our childhood when we used to be carefree and untroubled. For some - it is a small village where they spent summers with their grandparents, for another - it is a buzzing megalopolis of thousands skyscrapers. No matter what that place is, it’s nice to return to it in our memories from time to time, and remind ourself where we came from.
            </p>
          </div>
        </div>
        <div className="featured-img">
        <div className="block-desc">
            <h3>Colibri</h3>
            <div className="info-desc"> 24x18inches, acrylic on wood, 2020 </div>
            <br/>
            <p>
            Small, but highly detailed painting that will head over to a gallery in Barcelona in summer 2021.
            </p>
          </div>
          <div className="block-img"  style={{textAlign: 'end'}}>
          <img  src={require("../imgs/paintings/colibri.jpg")} alt="colibri"  onClick={handleImageClick}/>
          </div>
        </div>
        <a href ='/paintings' className="general-btn"><span>View More Paintings</span></a>
      </div>

      <h2>Selected Works</h2>
      <div style={{width: '100%', display: 'block', marginBottom: '60px'}}><Carousel /></div>
      <br/>

      <div id="intro">
        <img src={require("../imgs/studio.jpeg")} alt="portrait" id="portrait"/>
        <p>
          Yuliya Yasenetska is a Ukrainian born artist and currently works in New York. Yuliya is a multidisciplinary artist, focused primarily on painting. She enjoys experimenting with different mediums. Humans constantly change, and as an artist, Yuliya continuously seeks improvement and varied methods to express herself. She focuses on how her artwork looks and feels, not on ingraining hidden meanings into the art. Through the light and colorful depictions of her artwork she tries to awaken forgotten joy....
          <a href ='/about-bio' className="general-btn"><span>Read More</span></a>  
         </p>  
        </div> 
    <Form />
    {/* Instagram */}
    </div>
  );
};


export default HomePage;
