import React from 'react';
import Form from '../components/FormContactUs';
const About = () =>  {

      return(
        <div style={{marginBottom: '200px'}}>
          <div id="about">
            <img id="profile-pic" src={require("../imgs/yuliya_profile_gallery.jpg")} alt="portrait"/>
            <p>Yuliya Yasenetska, who recently moved to California from New York City, was born and raised in Lviv, Ukraine. She began her art career at the age of 6 when she started attending art classes at the Lviv National Academy of Arts. While she enjoyed the opportunity, she consistently refused to imitate someone else’s art. Why copy something that already exist? To create your own vision - felt more authentic to her. Eventually she was asked to leave the school unless she complied with the rules. She did not comply. Despite this, Yuliya never stopped expressing herself through creative processes. Her main forms of expression included poetry, music and the most dear to her heart - painting. This is one of the constants that she would forever rely on to confront the fluctuations of life.
            </p>
            <p>Yuliya Yasenetska enjoys experimenting with different mediums. She feels that painting, drawing, digital art, printmaking and the combination of these techniques is the representation of variation of things that happens in our life. Humans constantly change, and as an artist, Yuliya continuously seeks improvement and varied methods to express herself.
            </p>
            <p>Yuliya focuses on how her artwork looks and feels, not on ingraining hidden meanings into the art. When children look at the artwork - they don’t question ideas, or start debating on philosophical topics. All they see is colors, shapes, and their own view of the image; blended with their own naive vivid imaginations. She hopes to capture that carefree imagination in her paintings without enforcing any predefined connotations.
            </p>
            <p>Yuliya is tremendously inspired by nature, civilization, and humanity. What does it mean to be a human being? How does (and should) civilization interact with nature? Each element in her works reflect personalities, feelings, thoughts, and emotions that she experiences in her life. The classic theme of her art is the intersection of both imagination, and the understanding of our place in this world.
            </p>
            <p>Each place she depicts has real personal significance to her. Buildings which often appear in her works are symbols of what everyday humans are building or have built in our lives. They are representations of our past, present, and future. The use of color is fundamental to its simplicity, but also artificially spontaneous in its purity and vividness. The colors are bright and contrasting, the dark lines represent ordinary days, while the grey masses embody the daily routines and rituals that everyone must follow.
            </p>
            <p>In this highly connected modern world, we are constantly and disproportionately exposed to negative emotions. Social media/news thrive and grow of those same negative emotions. This only adds to our life's frustrations such as from work, relationships, and other struggles. Through the light and colorful depictions of her artwork she tries to awaken forgotten joy. Memories of joys similar to what we've all felt as children, like when an ice cream truck tune came playing down the street. Painting was the one thing that always remained full of positive emotions for Yuliya and helped her overcome life's pains, struggles, and personal depression. She hopes that her art can do the same for others whom may need a little piece of something pure positive and uplifting in their lives.
            </p>
          </div>
          <br/>
          <center><Form /></center>
        </div>
      );
};

export default About;
