import React from 'react';
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
              <img src={require("../imgs/printmaking/Underwworld2.jpg")} alt={props.printmakingData[0].name} title={props.printmakingData[0].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/City-nests.jpg")} alt={props.printmakingData[1].name} title={props.printmakingData[1].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/city-series1.jpg")} alt={props.printmakingData[2].name} title={props.printmakingData[2].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/house-life1.jpg")} alt={props.printmakingData[3].name} title={props.printmakingData[3].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/industrial-flower1.jpg")} alt={props.printmakingData[4].name} title={props.printmakingData[4].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Light2.jpg")} alt={props.printmakingData[5].name} title={props.printmakingData[5].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/3-color-experiment-1.jpg")} alt={props.printmakingData[6].name} title={props.printmakingData[6].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Town-Nest.jpg")} alt={props.printmakingData[7].name} title={props.printmakingData[7].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Energy.jpg")} alt={props.printmakingData[8].name} title={props.printmakingData[8].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/explosion.jpg")} alt={props.printmakingData[9].name} title={props.printmakingData[9].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/IMG_8576.jpg")} alt={props.printmakingData[10].name} title={props.printmakingData[10].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Turtle_state12.jpg")} alt={props.printmakingData[11].name} title={props.printmakingData[11].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/IMG_8578.jpg")} alt={props.printmakingData[12].name} title={props.printmakingData[12].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/industrialization1.jpg")} alt={props.printmakingData[13].name} title={props.printmakingData[13].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Shellville2.jpg")} alt={props.printmakingData[14].name} title={props.printmakingData[14].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Old-House.jpg")} alt={props.printmakingData[15].name} title={props.printmakingData[15].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Tree.jpg")} alt={props.printmakingData[16].name} title={props.printmakingData[16].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Birth2.jpg")} alt={props.printmakingData[17].name} title={props.printmakingData[17].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Flight.jpg")} alt={props.printmakingData[18].name} title={props.printmakingData[18].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Ghost-print-of-the-Village.jpg")} alt={props.printmakingData[19].name} title={props.printmakingData[19].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/IMG_8582.jpg")} alt={props.printmakingData[20].name} title={props.printmakingData[20].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Jellytown2.jpg")} alt={props.printmakingData[21].name} title={props.printmakingData[21].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Photo-print.jpg")} alt={props.printmakingData[22].name} title={props.printmakingData[22].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Village-in-the-mountains-.jpg")} alt={props.printmakingData[23].name} title={props.printmakingData[23].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/printmaking/Cactus-house.jpg")} alt={props.printmakingData[24].name} title={props.printmakingData[24].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Growing.jpg")} alt={props.printmakingData[25].name} title={props.printmakingData[25].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/heart-attack1.jpg")} alt={props.printmakingData[26].name} title={props.printmakingData[26].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/3-color-print1.jpg")} alt={props.printmakingData[27].name} title={props.printmakingData[27].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Light_state22.jpg")} alt={props.printmakingData[28].name} title={props.printmakingData[28].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Turtle2.jpg")} alt={props.printmakingData[29].name} title={props.printmakingData[29].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/Starry-night.jpg")} alt={props.printmakingData[30].name} title={props.printmakingData[30].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/printmaking/octopus3.jpg")} alt={props.printmakingData[31].name} title={props.printmakingData[31].name} name="printmaking" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
          </div>
        </div>
      );
};

export default Printmaking;
