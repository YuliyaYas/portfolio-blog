import React from 'react';
import '../stylesheet/Overlay.css';


const Overlay1 = (props) => {
  return(
    <div className="base" >
      <div className="shroud overlay-scroll">
        <div className="overlay-popup">
          <p className="close" onClick={props.handleCloseClick}/>
          <p className="all-caps">{props.info.name}</p>
          {props.info.url ? <img id="overlay-img" src={require(`../imgs/paintings/${props.info.url}`)}/> : "" }
          <i><p className="title">{props.info.specs}</p></i>
          <p className="desc">{props.info.description}</p>
        </div>
      </div>
    </div>
  );
};


export default Overlay1;
