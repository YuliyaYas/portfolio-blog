import React, { Component } from 'react';

const Contact = (props) =>  {
      return(
        <div id="contact-form">
          <center>
          <b><h3>{props.title}</h3></b>
          <p>{props.subtitle}</p>
          
          </center>
          <iframe height="497"
            frameBorder="0"
            scrolling="no"
            style={{width: '80%', border: 'none', display: 'block', margin: '0 auto', marginTop: '50px', backgroundColor: 'green !important'}}
            src="https://yuliyasart.wufoo.com/embed/zfo8cs61rij29h/">

          </iframe>
        </div>
      );
};

export default Contact;
