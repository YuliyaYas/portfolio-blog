import React, { Component } from 'react';

const About = () =>  {

      return(
        <div>
          <div id="about">
            <img id="profile-pic" src={require("../imgs/portrait1.jpg")} />
            <p>Yuliya was born and raised in Ukraine, and currently resides in New York City.
            </p>
            <p>Yuliya is strongly interested in nature, civilization, and humanity. What is a human being? How does civilization interact with nature? Each animal, building or technology in her works symbolize personalities, feelings, thoughts and emotions that we deal with everyday. The classic theme of understanding by means of imagination and feeling rather than analytical kind of thinking.
            </p>
            <p>Each place she draws are real places with personal significance in one way or another. Buildings, that often appear in her works are symbols of what we are building or have built in our lives. They are representations of our past, present and future. The use of color is natural in its simplicity but also artificial enough in its purity and vividness. The colors are bright and contrasting, where dark lines represent ordinary days, where grey masses of people follow daily routine.</p>
            <p>The use of different mediums, such as painting, drawing, digital art, printmaking and the combination of some of these techniques together is a representation of variety of things that happens in our life. Humans constantly change and search for variety in their lives, and as an artist Yuliya constantly looks for improvement and different ways to express herself.</p>
          </div>
          <br/>
            <a href="/contact"><h4>CONTACT YULIYA</h4></a>
        </div>
      );
};

export default About;
