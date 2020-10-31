import React from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.scss';
import { useLocation } from 'react-router-dom';
var slugify = require('slugify')

const Artworks = ({ 
  data, handleCloseClick, handleImageClick,
  closed, info, galleryType, handleArrowClick, 
}) =>  {
 
  const art = data.map((art)=>{
    return <div key={art.name+art.type}>
        <a href={`#${art.name}`}><img className="gallery-img"src={require(`../imgs/${art.type}/${art.url}`)} title={art.name} id={slugify(art.name)} style={{width:'100%'}} name={art.type} alt={art.name} onClick={handleImageClick}/></a>
        
        {/* <div className="mobile-info">
            {art.sold ? <p className="sold-mobile" onClick={handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={handleCloseClick}>BUY</p></a>}
            <p className="all-caps">{art.name}</p><i><p className="title">{art.specs}</p></i><p className="desc">{art.description}</p><hr />
        </div> */}
        </div>
    
  });

   const location = useLocation()
   const artName = location.hash.substring(1).replace(/%20/g, " ");
   let overlayImg = {};
   if (artName) {
    overlayImg = data.filter(d=> d.name.toLowerCase() === artName.toLowerCase())[0]
   } else {
    overlayImg = info
   }
   
  return(
      <div className="photos">
        {closed===true
        ?
        ""
        :
        <Overlay handleArrowClick={handleArrowClick} handleCloseClick={handleCloseClick} overlayImg={overlayImg}/>
        }
        {art}
      </div>
    );
};

export default Artworks;
