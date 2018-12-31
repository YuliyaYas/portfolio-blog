import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Paintings = (props) =>  {
      return(
        <div className="gallery">
        {props.closed===true
        ?
        ""
        :
        <Overlay info={props.info} galleryType={props.galleryType} handleArrowClick={props.handleArrowClick} handleCloseClick={props.handleCloseClick}/>
        }
          <p>Click on image to read more about the work</p>
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/paintings/Abstract-Anomaly.jpg")} title={props.paintingsData[0].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/paintings/Chamille.jpg")} title={props.paintingsData[1].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/City-on-clouds.jpg")} title={props.paintingsData[2].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/dou-color-Abstract.jpg")} title={props.paintingsData[3].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
            </div>
            <div className="column-grid">
              <img src={require("../imgs/paintings/Dreamworld.jpg")} title={props.paintingsData[4].name} style={{width:'100%'}} name="paintings" onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/Flamity.png")} title={props.paintingsData[5].name} style={{width:'100%'}} name="paintings" onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/FullGlass.jpg")} title={props.paintingsData[6].name} style={{width:'100%'}} name="paintings" onClick={props.handleImageClick}/>
            </div>
            <div className="column-grid">
              <img src={require("../imgs/paintings/Octo.png")} title={props.paintingsData[7].name} style={{width:'100%'}} name="paintings" onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/Snaility.jpg")} title={props.paintingsData[8].name} style={{width:'100%'}} name="paintings" onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/Tale.jpg")} title={props.paintingsData[9].name} style={{width:'100%'}} name="paintings" onClick={props.handleImageClick}/>
            </div>
            <div className="column-grid">
              <img src={require("../imgs/paintings/Master-copy-of-Louisa-Matthiasdottirs-work.jpg")} title={props.paintingsData[10].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/Tree1.jpg")} title={props.paintingsData[11].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/TurtleVille.jpg")} title={props.paintingsData[12].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
              <img src={require("../imgs/paintings/WorldsEnergy.jpg")} title={props.paintingsData[13].name} name="paintings" style={{width:'100%'}} onClick={props.handleImageClick}/>
            </div>
          </div>
        </div>
      );
};

export default Paintings;

              {{/*<img src={require("../imgs/paintings/Portrait-of-Roksolana.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/paintings/Travel.jpg")} style={{width:'100%'}} />
*/}}
