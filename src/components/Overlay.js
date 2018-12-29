import React from 'react';
import '../stylesheet/Overlay.css';


const Overlay1 = (props) => {
  return(
    <div className="base" >
      <div className="shroud overlay-scroll box">
        <div className="overlay-popup">
          <img class="left-arrow" src="https://image.flaticon.com/icons/svg/60/60758.svg" alt="green" />
          <img class="right-arrow" src="https://image.flaticon.com/icons/svg/60/60758.svg" alt="red" />
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
