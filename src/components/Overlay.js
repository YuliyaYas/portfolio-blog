import React from 'react';
import '../stylesheet/Overlay.scss';

const Overlay1 = ({overlayImg, handleArrowClick, handleCloseClick}) => {
  return(
    // <div className="base" >
    //   <div className="shroud overlay-scroll box">
        <div className="overlay-popup">
         <img className="overlay-img" alt={overlayImg.name} src={require(`../imgs/${overlayImg.type}/${overlayImg.url}`)}/>
          <img className="left-arrow" src="https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png" alt="left" onClick={handleArrowClick}/>
          <img className="right-arrow" src="https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png" alt="right" onClick={handleArrowClick}/>
          {/* {props.info.sold ? <p className="sold" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label" onClick={props.handleCloseClick}>BUY</p></a>} */}
          <p className="close" onClick={handleCloseClick}/>
           <center> <p className="all-caps">{overlayImg.name}</p></center> 
          <i><p className="title">{overlayImg.specs}</p></i>
          <p className="desc">{overlayImg.description}</p>
        </div>
    //   </div>
    // </div>
  );
};


export default Overlay1;
