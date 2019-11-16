import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Photography = (props) =>  {
  const data = props.photographyData;
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
            {
           ['0', '1', '10', '2', '3'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/photography/${data[i].url}`)} title={data[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
          })
          }
             
            </div>
            <div className="column-grid">
            {
           ['5', '6', '7', '8'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/photography/${data[i].url}`)} title={data[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
          })
          }
            </div>
            <div className="column-grid">
            {
           ['9', '4', '11', '12'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/photography/${data[i].url}`)} title={data[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
          })
          }
            </div>
            <div className="column-grid">
            {
           ['14', '15', '16'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/photography/${data[i].url}`)} title={data[0].name} name="photography" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
          })
          }
            </div>
          </div>
        </div>
      );
};

export default Photography;
