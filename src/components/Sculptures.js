import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Sculptures = (props) =>  {
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
              <img src={require("../imgs/sculptures/berry.png")} title={props.sculpturesData[0].name} name="sculptures" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/sculptures/city.png")} title={props.sculpturesData[1].name} name="sculptures" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/sculptures/face.png")} title={props.sculpturesData[2].name} name="sculptures" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/sculptures/vase.jpg")} title={props.sculpturesData[3].name} name="sculptures" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
          </div>
        </div>
      );
};

export default Sculptures;

{/* <img src={require("../imgs/sculptures/plates.jpg")} title={props.sculpturesData[0].name} name="sculptures" style={{width:'100%'}} onClick={props.handleImageClick} />
*/}
