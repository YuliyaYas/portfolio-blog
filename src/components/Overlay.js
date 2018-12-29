import React from 'react';
import '../stylesheet/Overlay.css';


const Overlay1 = (props) => {
  return(
    <div className="base" >
      <div className="shroud overlay-scroll">
        <div className="overlay-popup">
          <a href="#" className="close" onClick={props.handleCloseClick}/>
          <p>SNAILITY</p>
          <img id="overlay-img" src={require("../imgs/paintings/Snaility.jpg")}/>
          <i><p className="title">20x20inches, acrylic on wood</p></i>
          <p className="desc">The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point</p>
        </div>
      </div>
    </div>
  );
};


export default Overlay1;
