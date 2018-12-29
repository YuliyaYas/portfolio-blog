import React, { Component } from 'react';
import '../stylesheet/Gallery.css';


const Illustrations = () =>  {
      return(
        <div className="gallery">
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/illustrations/atom.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/baloon1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/birds-view.png")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/blackberry.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/Flo-city.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/goat.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/shelville1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/snaility1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/dinosaur.jpg")} style={{width:'100%'}} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/illustrations/Burger-.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/camel.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/chameleon.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/gyraff2.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/heart3.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/houses-wine.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/Pattern.png")} style={{width:'100%'}} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/illustrations/City-on-the-hill.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/colibri.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/crab.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/houses-yard.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/Housing-projects.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/jellyfish.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/saturn1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/townhouse_insta.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/sunflower.jpg")} style={{width:'100%'}} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/illustrations/dirigible.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/fish2.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/flamingo.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/Lemur.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/Mushrooms.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/octopus4.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/shell1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/Train1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/illustrations/turtle2.jpg")} style={{width:'100%'}} />
            </div>
          </div>
        </div>
      );
};

export default Illustrations;
