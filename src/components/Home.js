import React from 'react';

const Header = () =>  {
      return(
        <div id="home">
          <a href="https://www.amazon.com/dp/1673973914?ref_=pe_3052080_397514860" target="_blank" rel="noopener noreferrer"><img id="amazon-mobile" src={require('../imgs/amz-mobile.png')} alt="Coloring book"/></a>
          <img id="home-img" src={require("../imgs/paintings/Snaility.jpg")} alt="Rebirth"/>
          <div className="title">
            <p>REBIRTH</p>
            <i>20x20inches, acrylic on wooden panel</i>
          </div>
          <p className="desc">The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point.</p>

        </div>
      );
};

export default Header;
