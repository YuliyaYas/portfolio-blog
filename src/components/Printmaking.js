import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Printmaking = (props) =>  {
      return(
        <div className="gallery">
        {props.closed===true
        ?
        ""
        :
        <Overlay info={props.info} galleryType={props.galleryType} handleArrowClick={props.handleArrowClick} handleCloseClick={props.handleCloseClick}/>
        }
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Underwworld2.jpg")} title={props.printmakingData[0].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/City-nests.jpg")} title={props.printmakingData[1].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/city-series1.jpg")} title={props.printmakingData[2].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/house-life1.jpg")} title={props.printmakingData[3].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/industrial-flower1.jpg")} title={props.printmakingData[4].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Light2.jpg")} title={props.printmakingData[5].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/3-color-experiment-1.jpg")} title={props.printmakingData[6].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Town-Nest.jpg")} title={props.printmakingData[7].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Energy.jpg")} title={props.printmakingData[8].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/explosion.jpg")} title={props.printmakingData[9].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/IMG_8576.jpg")} title={props.printmakingData[10].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Turtle_state12.jpg")} title={props.printmakingData[11].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/IMG_8578.jpg")} title={props.printmakingData[12].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/industrialization1.jpg")} title={props.printmakingData[13].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Shellville2.jpg")} title={props.printmakingData[14].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Old-House.jpg")} title={props.printmakingData[15].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Tree.jpg")} title={props.printmakingData[16].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Birth2.jpg")} title={props.printmakingData[17].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Flight.jpg")} title={props.printmakingData[18].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Ghost-print-of-the-Village.jpg")} title={props.printmakingData[19].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/IMG_8582.jpg")} title={props.printmakingData[20].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Jellytown2.jpg")} title={props.printmakingData[21].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Photo-print.jpg")} title={props.printmakingData[22].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Village-in-the-mountains-.jpg")} title={props.printmakingData[23].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Cactus-house.jpg")} title={props.printmakingData[24].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Growing.jpg")} title={props.printmakingData[25].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/heart-attack1.jpg")} title={props.printmakingData[26].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/3-color-print1.jpg")} title={props.printmakingData[27].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Light_state22.jpg")} title={props.printmakingData[28].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Turtle2.jpg")} title={props.printmakingData[29].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Starry-night.jpg")} title={props.printmakingData[30].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/octopus3.jpg")} title={props.printmakingData[31].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
          </div>
        </div>
      );
};

export default Printmaking;
