import React from 'react';
import '../stylesheet/Overlay.scss';

const Overlay = ({
  overlayImg, handleArrowClick, handleCloseClick, rightArrow, leftArrow
}) => {
  return(
    <div className="overlay-popup">
      <img className="overlay-img" alt={overlayImg.name} src={require(`../imgs/${overlayImg.type}/${overlayImg.url}`)}/>
      <div id="left-arrow" onClick={handleArrowClick} style={{ visibility: leftArrow ? 'visible' : 'hidden'}}/>
      <div id="right-arrow" onClick={handleArrowClick} style={{ visibility: rightArrow ? 'visible' : 'hidden'}}/>

      <p className="close" onClick={handleCloseClick}/>
        <center> <p className="all-caps">{overlayImg.name}{overlayImg.sold && <span style={{textTransform: 'lowercase'}}> (sold)</span>}</p></center> 
      <i><p className="title">{overlayImg.specs}</p></i>
      <p className="desc">{overlayImg.description}</p>
    </div>
  );
};

export default Overlay;
