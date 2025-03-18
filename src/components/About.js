import React from 'react';
import Form from '../components/FormContactUs';
const About = () =>  {
      return(
        <div style={{marginBottom: '200px'}}>
          <div id="about">
            <img id="profile-pic" src={require("../imgs/yuliya_profile_gallery.jpg")} alt="portrait"/>
            <p>Yuliya Yasenetska, an artist born and raised in Lviv, Ukraine, recently relocated to Ann Arbor, Michigan after spending ten years in New York City. Art has been a part of her life for as long as she can remember - whether through poetry, music, or most importantly, painting. Through all of life's ups and downs, painting was always her constant, a way to navigate and make sense of the world around her.
            </p>
            <p>She loves experimenting with different techniques, blending painting, drawing, digital art, and printmaking to reflect the ever-changing nature of life itself. Her approach to art evolves just as people do - always growing, always seeking new ways to express herself.
            </p>
            <p>Yuliya doesn’t try to embed deep, complicated messages in her work. Instead, she wants people to experience it the way children do - without overanalyzing, just taking in the colors, shapes, and emotions in their purest form. Kids don’t stop to debate philosophy when they see a painting; they simply feel it. That’s the kind of uninhibited imagination she hopes to capture.
            </p>
            <p>Her biggest inspirations come from nature, civilization, and the human experience. What does it truly mean to be human? How should we coexist with nature? Every element in her work reflects her thoughts, emotions, and personal experiences. She plays with vivid colors to create a sense of spontaneity and life.
            </p>
        
            <p>In a world constantly flooded with negativity - through social media, the news, and daily life frustrations - Yuliya wants her art to be a reminder of joy. The kind of pure, childlike happiness we all knew at some point, like hearing the tune of an ice cream truck on a summer afternoon. Painting has always been her refuge, a source of positivity that helped her through difficult times. Now, she hopes her work can offer others that same sense of comfort, a small piece of brightness in their lives.
            </p>
          </div>
          <br/>
          <center><Form /></center>
        </div>
      );
};

export default About;
