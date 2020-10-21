import React from 'react';
import '../stylesheet/Homepage.scss';
import Book from '../components/Book';
import Form from '../components/FormContactUs';
import Carousel from '../components/Carousel';

const HomePage = (props) => {
  return(
    <div className="homepage">
       <div id="intro">
        <img src={require("../imgs/studio.jpeg")} alt="portrait" id="portrait"/>
        <p>
          Yuliya Yasenetska is a Ukrainian born artist and currently works in New York. Yuliya is a multidisciplinary artist, focused primarily on painting. She enjoys experimenting with different mediums. Humans constantly change, and as an artist, Yuliya continuously seeks improvement and varied methods to express herself. She focuses on how her artwork looks and feels, not on ingraining hidden meanings into the art. Through the light and colorful depictions of her artwork she tries to awaken forgotten joy....
          <a href ='/about' className="general-btn"><span>Read More</span></a>  
         </p>  
        </div> 
      <div className="featured"> 
        <h2>Latest Works</h2>
        <div className="featured-img">
          <div className="block-img">
            <img  src={require("../imgs/paintings/colibri.jpg")} alt="colibri"/>
          </div>
          <div className="block-desc">
            <h3>Colibri</h3>
            <div className="info-desc"> 24x18inches, acrylic on wood, 2020 </div>
            <br/>
            <p>The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point.
            </p>
          </div>
        </div>
        <div className="featured-img">
        <div className="block-desc">
            <h3>SNAILITY</h3>
            <div className="info-desc"> 20x20inches, acrylic on wood, 2020 </div>
            <br/>
            <p>
            The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point.
            </p>
          </div>
          <div className="block-img"  style={{textAlign: 'end'}}>
            <img  src={require("../imgs/paintings/kingsfisher.jpg")} alt="Rebirth"/>
          </div>
        </div>
        <a href ='/paintings' className="general-btn"><span>View More Paintings</span></a>
      </div>
      <h2>Selected Works</h2>
      <Carousel />
      <br/>
    <Form/>
    Instagram
    </div>
  );
};


export default HomePage;
