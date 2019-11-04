import React from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


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
           ['19', '14', '0', '1', '2', '3'].map((i, count)=>{
            return <div key={i} className=""><img src={require(`../imgs/paintings/${data[i].url}`)} title={data[i].name} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info"><p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
            
          })
          }
         </div>
            <div className="column-grid">
            {
           ['15', '4', '5', '6'].map((i, count)=>{
             return <div key={i}><img src={require(`../imgs/paintings/${data[i].url}`)} title={data[i].name} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info"><p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
           })
          }
           
            </div>
            <div className="column-grid">
            {
           ['18', '16', '7', '8', '9'].map((i, count)=>{
             return <div key={i}><img src={require(`../imgs/paintings/${data[i].url}`)} title={data[i].name} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info"><p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
             
           })
          }

            </div>
            <div className="column-grid">
            {
           ['17', '10', '11', '12', '13'].map((i, count)=>{
             return <div key={i}><img src={require(`../imgs/paintings/${data[i].url}`)} title={data[i].name} style={{width:'100%'}} name="paintings" alt={data[i].name} onClick={props.handleImageClick}/><div className="mobile-info"><p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p><hr /></div></div>
             
           })
          }
              
            </div>
          </div>
        </div>
      );
};

export default Paintings;
