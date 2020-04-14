import React from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';
var slugify = require('slugify')

const Paintings = (props) =>  {
  const data = props.paintingsData;
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
           ['20','19', '14', '0', '1', '2'].map((i, count)=>{
            return <div key={i} className=""><img src={require(`../imgs/paintings/${data[i].url}`)} id={slugify(data[i].name)} title={data[i].name} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
            
          })
          }
         </div>
            <div className="column-grid">
            {
           [ '21', '15', '4', '5', '6'].map((i, count)=>{
             return <div key={i}><img src={require(`../imgs/paintings/${data[i].url}`)} id={slugify(data[i].name)} title={data[i].name} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
           })
          }
           
            </div>
            <div className="column-grid">
            {
           ['18', '16', '7', '8', '3', '9'].map((i, count)=>{
             return <div key={i}><img src={require(`../imgs/paintings/${data[i].url}`)} title={data[i].name} id={slugify(data[i].name)} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
             
           })
          }

            </div>
            <div className="column-grid">
            {
           ['17', '10', '11', '12', '13'].map((i, count)=>{
             return <div key={i}><img src={require(`../imgs/paintings/${data[i].url}`)} title={data[i].name} id={slugify(data[i].name)} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
             
           })
          }
              
            </div>
          </div>
        </div>
      );
};

export default Paintings;
