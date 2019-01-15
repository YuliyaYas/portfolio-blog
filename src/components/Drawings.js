import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Drawings = (props) =>  {
      return(
        <div className="gallery">
          {props.closed===true
          ?
          ""
          :
          <Overlay info={props.info} galleryType={props.galleryType} handleArrowClick={props.handleArrowClick} handleCloseClick={props.handleCloseClick}/>
          }
          <p className="click">Click on image to read more about the work</p>
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/drawings/Sunflower.jpg")} title={props.drawingsData[0].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Milwaukee-1.jpg")} title={props.drawingsData[1].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Ilona.jpg")} title={props.drawingsData[2].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Iceberg.jpg")} title={props.drawingsData[3].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/birth.png")} title={props.drawingsData[4].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/julianna.jpg")} title={props.drawingsData[5].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Mushroom-Tree.jpg")} title={props.drawingsData[6].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Tree2.jpg")} title={props.drawingsData[7].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/UniCity.jpg")} title={props.drawingsData[8].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/industrial.jpg")} title={props.drawingsData[9].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
            <img src={require("../imgs/drawings/Turtle-Ville.jpg")} title={props.drawingsData[10].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
            <img src={require("../imgs/drawings/IMG_8306.jpg")} title={props.drawingsData[11].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Grumpy-cat.jpg")} title={props.drawingsData[12].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Sun.jpg")} title={props.drawingsData[13].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Earth.jpg")} title={props.drawingsData[14].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Train-Home.jpg")} title={props.drawingsData[15].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Mountain.jpg")} title={props.drawingsData[16].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/barn.png")} title={props.drawingsData[17].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Valera.jpg")} title={props.drawingsData[18].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Octo-Tree.jpg")} title={props.drawingsData[19].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/garden.png")} title={props.drawingsData[20].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Tree_2.jpg")} title={props.drawingsData[21].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/drawings/cactus-house.jpg")} title={props.drawingsData[22].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Up.jpg")} title={props.drawingsData[23].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Andrei.jpg")} title={props.drawingsData[24].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Nest.jpg")} title={props.drawingsData[25].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/In-the-garden.jpg")} title={props.drawingsData[26].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Shellville.jpg")} title={props.drawingsData[27].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Lianok.jpg")} title={props.drawingsData[28].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/atom.png")} title={props.drawingsData[29].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Ruins.jpg")} title={props.drawingsData[30].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/vines.png")} title={props.drawingsData[31].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/drawings/Roksolana_maylar_ink.jpg")} title={props.drawingsData[32].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Mushroom-town.jpg")} title={props.drawingsData[33].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/lighthouse.png")} title={props.drawingsData[34].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Girl-with-butterflies.jpg")} title={props.drawingsData[35].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/ShellTown.jpg")} title={props.drawingsData[36].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Moments.jpg")} title={props.drawingsData[37].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/girl.jpg")} title={props.drawingsData[38].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Piece-of-a-spoon.jpg")} title={props.drawingsData[39].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/fairytale.png")} title={props.drawingsData[40].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Saturnity.jpg")} title={props.drawingsData[41].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/Tree3.jpg")} title={props.drawingsData[42].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/drawings/selfportrait.png")} title={props.drawingsData[43].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
          </div>
        </div>
      );
};

export default Drawings;
