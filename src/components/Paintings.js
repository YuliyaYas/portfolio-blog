import React, { Component } from 'react';
import Overlay from './Overlay'
import '../stylesheet/Gallery.css';


const Paintings = (props) =>  {
      return(
        <div className="gallery">
        {props.closed===true
        ?
        ""
        :
        <Overlay handleCloseClick={props.handleCloseClick}/>
        }
          <p>Click on image to read more about the work</p>
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/paintings/Abstract-Anomaly.jpg")} title="Abstract-Anomaly" style={{width:'100%'}} onClick={props.handleImgClick} />
              <img src={require("../imgs/paintings/Chamille.jpg")} title="Chamille" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/City-on-clouds.jpg")} title="City-on-clouds" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/dou-color-Abstract.jpg")} title="dou-color-Abstract" style={{width:'100%'}} onClick={props.handleImgClick}/>
            </div>
            <div className="column-grid">
              <img src={require("../imgs/paintings/Dreamworld.jpg")} title="Dreamworld" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/Flamity.png")} title="Flamity" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/FullGlass.jpg")} title="FullGlass" style={{width:'100%'}} onClick={props.handleImgClick}/>
            </div>
            <div className="column-grid">
              <img src={require("../imgs/paintings/Octo.png")} title="Octo" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/Snaility.jpg")} title="Snaility" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/Tale.jpg")} title="Tale" style={{width:'100%'}} onClick={props.handleImgClick}/>
            </div>
            <div className="column-grid">
              <img src={require("../imgs/paintings/Master-copy-of-Louisa-Matthiasdottirs-work.jpg")} title="Master Copy of Louisa Matthiasdottir's work" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/Tree1.jpg")} title="Tree1" style={{width:'100%'}} />
              <img src={require("../imgs/paintings/TurtleVille.jpg")} title="TurtleVille" style={{width:'100%'}} onClick={props.handleImgClick}/>
              <img src={require("../imgs/paintings/WorldsEnergy.jpg")} title="World's Energy" style={{width:'100%'}} onClick={props.handleImgClick}/>
            </div>
          </div>
        </div>
      );
};

export default Paintings;

              {{/*<img src={require("../imgs/paintings/Portrait-of-Roksolana.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Travel.jpg")} style={{width:'100%'}} />
*/}}
