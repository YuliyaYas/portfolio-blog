import React, { Component } from 'react';
var parse = require('html-react-parser');


const About = (props) =>  {
      return(
        <div>
          <div id="about">
            {props.about.profileImage ? <img id="profile-pic" src={props.about.profileImage.fields.file.url} /> : ''}
            {props.about.paragraphs ? parse(props.about.paragraphs) : ''}
            </div>
          <br/>
            {props.about.cta ? <a href={props.about.cta}><h4>{props.about.ctaText}</h4></a> : ''}
        </div>
      );
};

export default About;
