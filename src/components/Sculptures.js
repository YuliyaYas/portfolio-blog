import React, { Component } from 'react';
import '../stylesheet/Gallery.css';


const Sculptures = () =>  {
      return(
        <div className="gallery">
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/sculptures/berry.png")} style={{width:'100%'}} />
              <img src={require("../imgs/sculptures/plates.jpg")} style={{width:'100%'}} />
            </div>
            <div className="column-grid">
              <img src={require("../imgs/sculptures/city.png")} style={{width:'100%'}} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/sculptures/face.png")} style={{width:'100%'}} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/sculptures/vase.jpg")} style={{width:'100%'}} />

            </div>
          </div>
        </div>
      );
};

export default Sculptures;
