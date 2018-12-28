import React, { Component } from 'react';
import '../stylesheet/Gallery.css';


const Illustrations = () =>  {
      return(
        <div class="gallery">
          <div class="row-grid">
            <div class="column-grid">
              <img src={require("../imgs/paintings/Abstract-Anomaly.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Chamille.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/City-on-clouds.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/dou-color-Abstract.jpg")} style={{width:'100%'}} />

            </div>
            <div class="column-grid">
              <img src={require("../imgs/paintings/Dreamworld.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Flamity.png")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/FullGlass.jpg")} style={{width:'100%'}} />
            </div>
            <div class="column-grid">
              <img src={require("../imgs/paintings/Octo.png")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Snaility.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Tale.jpg")} style={{width:'100%'}} />
            </div>
            <div class="column-grid">
              <img src={require("../imgs/paintings/Master-copy-of-Louisa-Matthiasdottirs-work.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Tree1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/TurtleVille.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/WorldsEnergy.jpg")} style={{width:'100%'}} />
            </div>
          </div>
        </div>
      );
};

export default Illustrations;

              {{/*<img src={require("../imgs/paintings/Portrait-of-Roksolana.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Travel.jpg")} style={{width:'100%'}} />
*/}}
