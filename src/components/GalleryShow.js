import React from 'react';
import '../stylesheet/GalleryShow.scss';
function GalleryShow(){
  
    return (
    <div className="gallery-show">
        <h2>Coming Up: Solo Art Show</h2>
        
        <div className="grid-show">
            <div className="details-show">
            <div className="gallery-name">Gallerie Valerie | <a href="https://goo.gl/maps/ji4YBUzGyN4xi7WD9" target="blank" className="link">628 2nd Ave, Crockett, CA 94525, USA</a></div>
                <div className="opening-info">Opening Night is Friday, October 1st from 7-9pm. The exhibition will run from October 1st through October 24th. Please wear your mask and abide by social distancing rules.</div>
                <a href="https://www.gallerievalerie.com/event-details/yuliya-yasenetska" target="blank" className="rsvp-btn">RSVP</a>
            </div>
            <img src={require('../imgs/gallerievalerie.jpg')} />
        </div>
    </div>
   );
}   

export default GalleryShow;
