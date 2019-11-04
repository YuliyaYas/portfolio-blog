import React, { Component } from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Illustrations = (props) =>  {
  const data = props.illustrationsData;
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
            {
           ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/illustrations/${data[i].url}`)} title={data[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
            
          })
          }
            </div>
            <div className="column-grid">
            {
           ['10', '11', '12', '13', '14', '15', '16', '17', '18'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/illustrations/${data[i].url}`)} title={data[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
            
          })
          }
            </div>
            <div className="column-grid">
            {
           ['19', '20', '21', '22', '23', '24', '25', '26', '27'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/illustrations/${data[i].url}`)} title={data[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
          })
          }
          </div>
            <div className="column-grid">
            {
           ['28', '29', '30', '31', '32', '33', '34', '35', '36', '37'].map((i, count)=>{
            return <img key={count} src={require(`../imgs/illustrations/${data[i].url}`)} title={data[0].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
          })
          }
            </div>
          </div>
        </div>
      );
};

export default Illustrations;
