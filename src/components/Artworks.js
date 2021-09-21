import React from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.scss';
var slugify = require('slugify')

const Artworks = ({ 
  data, handleCloseClick, handleImageClick,
  closed, info, handleArrowClick, rightArrow, leftArrow,
}) =>  {
  const art = data.map((art)=>{
    return <div key={art.name+art.type}>
        <a href={`#${slugify(art.name)}`}><img className="gallery-img"src={require(`../imgs/${art.type}/${art.url}`)} title={slugify(art.name)} id={slugify(art.name)} style={{width:'100%'}} name={art.type} alt={art.name} onClick={handleImageClick}/></a>
        <div className="mobile-desc">
            <center> <p className="all-caps">{art.name}{art.sold && <span style={{textTransform: 'lowercase'}}>{art.sold}</span>}</p></center> 
          <i><p className="title">{art.specs}</p></i>
          <p className="desc">{art.description}</p>
        </div>
        </div>
  });

  return(
      <div className="photos">
        {closed===true
        ?
        ""
        :
        <Overlay handleArrowClick={handleArrowClick} handleCloseClick={handleCloseClick} overlayImg={info} rightArrow={rightArrow} leftArrow={leftArrow}/>
        }
        {art}
      </div>
    );
};

export default Artworks;
