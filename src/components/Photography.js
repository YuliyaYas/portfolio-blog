import React, { Component } from 'react';
import '../stylesheet/Gallery.css';


const Photography = () =>  {
      return(
        <div className="gallery">
          <div className="row-grid">
            <div className="column-grid">
              <img src={require("../imgs/photography/1.jpg")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/5.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/9.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/13.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/17.png")} style={{width:'100%'}} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/2.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/16.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/10.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/14.png")} style={{width:'100%'}} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/3.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/7.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/11.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/15.png")} style={{width:'100%'}} />

            </div>
            <div className="column-grid">
              <img src={require("../imgs/photography/4.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/8.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/6.png")} style={{width:'100%'}} />
              <img src={require("../imgs/photography/12.png")} style={{width:'100%'}} />

            </div>
          </div>
        </div>
      );
};

export default Photography;
