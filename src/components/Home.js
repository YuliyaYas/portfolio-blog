import React, { Component } from 'react';

const Header = () =>  {
      return(
        <div id="home">
          <img id="home-img" src={require("../imgs/paintings/Snaility.jpg")}/>
          <div className="title">
            <p>REBIRTH</p>
            <i>20x20inches, acrylic on wooden panel</i>
          </div>
          <p className="desc">The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point.</p>

        </div>
      );
};

export default Header;
