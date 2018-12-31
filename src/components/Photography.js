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
        <Overlay info={props.info} galleryType={props.galleryType} handleArrowClick={props.handleArrowClick} handleCloseClick={props.handleCloseClick}/>
        }
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/photography/1.jpg")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/5.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/9.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/13.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/17.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/2.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/16.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/10.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/14.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/3.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/7.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/11.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/15.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/4.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/8.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/6.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />
              <img src={require("../imgs/photography/12.png")} title={props.photographyData[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} />

            </div>
          </div>
        </div>
      );
};

export default Photography;
