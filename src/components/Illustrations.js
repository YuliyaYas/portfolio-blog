import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Illustrations = (props) =>  {
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
              <img src={require("../imgs/illustrations/atom.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/baloon1.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/birds-view.png")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/blackberry.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/Flo-city.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/goat.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/shelville1.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/snaility1.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/dinosaur.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/illustrations/Burger-.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/camel.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/chameleon.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/gyraff2.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/heart3.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/houses-wine.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/Pattern.png")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/illustrations/City-on-the-hill.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/colibri.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/crab.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/houses-yard.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/Housing-projects.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/jellyfish.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/saturn1.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/townhouse_insta.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/sunflower.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/illustrations/dirigible.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/fish2.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/flamingo.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/Lemur.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/Mushrooms.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/octopus4.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/shell1.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/Train1.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/illustrations/turtle2.jpg")} title={props.illustrationsData[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} />
            </div>
          </div>
        </div>
      );
};

export default Illustrations;
