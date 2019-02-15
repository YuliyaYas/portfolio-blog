import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Photography = (props) =>  {
      return(
        <div className="gallery">
        {props.closed===true
        ?
        ""
        :
        <a href="/careers/yo"><Overlay info={props.info} galleryType={props.galleryType} handleArrowClick={props.handleArrowClick} handleCloseClick={props.handleCloseClick}/></a>
        }
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/photography/norway-1.jpg")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/alcatraz.jpg")} title={props.photographyData[1].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/norway-5.jpg")} title={props.photographyData[10].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/skeleton.png")} title={props.photographyData[2].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/chicago.jpg")} title={props.photographyData[3].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/mohonk.jpg")} title={props.photographyData[5].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/whitney.jpg")} title={props.photographyData[6].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/chicago_1.jpg")} title={props.photographyData[7].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/chicago_wheel.jpg")} title={props.photographyData[8].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/norway-7.jpg")} title={props.photographyData[9].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/montreal.jpg")} title={props.photographyData[4].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/chicago_4.jpg")} title={props.photographyData[11].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/dome.jpg")} title={props.photographyData[12].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/fullton.png")} title={props.photographyData[14].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/sanfran-1.jpg")} title={props.photographyData[15].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/fullton_up.png")} title={props.photographyData[16].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
          </div>
        </div>
      );
};

export default Photography;
