import React from 'react';
import '../stylesheet/Overlay.css';


const Overlay1 = (props) => {
  return(
    <div className="base" >
      <div className="shroud overlay-scroll box">
        <div className="overlay-popup">
          <img className="left-arrow" src="https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png" alt="left" onClick={props.handleArrowClick}/>
          <img className="right-arrow" src="https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png" alt="right" onClick={props.handleArrowClick}/>
          <p className="close" onClick={props.handleCloseClick}/>
          <p className="all-caps">{props.info.name}</p>
          {props.info.url ? <img id="overlay-img" alt="painting" src={require(`../imgs/${props.galleryType}/${props.info.url}`)}/> : "" }
          <i><p className="title">{props.info.specs}</p></i>
          <p className="desc">{props.info.description}</p>
        </div>
      </div>
    </div>
  );
};


export default Overlay1;
