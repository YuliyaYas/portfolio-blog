import React from 'react';
import '../stylesheet/Homepage.scss';

const HomePage = (props) => {
  return(
    <div className="homepage">
      <div className="featured">        
        <h2>Latest works</h2>
        <div className="featured-img">
          <div className="block-img">
            <img  src={require("../imgs/paintings/Snaility.jpg")} alt="Rebirth"/>
          </div>
          <div className="block-desc">
            <div>SNAILITY</div>
            <div> 20x20inches, acrylic on wood </div>
            <br/>
            The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point.
          </div>
        </div>
        <div className="featured-img">
          <div className="block-img">
            <img  src={require("../imgs/paintings/Snaility.jpg")} alt="Rebirth"/>
          </div>
          <div className="block-desc">
            <div>SNAILITY</div>
            <div> 20x20inches, acrylic on wood </div>
            <br/>
            The Greek poet Hesiod wrote that snails signified the time to harvest by climbing up the stems. This symbolized growth and rebirth. As women, we lead new innovations and ideas, we build new generations. We constantly grow and climb up the social ladder. Slowly but steady, small but many – may we rise up and carry our future to the brightest point.
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
