import React from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';

const Drawings = (props) =>  {
  const data = props.drawingsData;
      return(
        <div className="gallery">
          {props.closed===true
          ?
          ""
          :
          <Overlay info={props.info} galleryType={props.galleryType} handleArrowClick={props.handleArrowClick} handleCloseClick={props.handleCloseClick}/>
          }
          <p className="click">Click on image to read more about the work</p>
          <div className="row-grid">
            <div className="column-grid">
            {
           ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((i, count)=>{
            return <div>
              <img key={count} src={require(`../imgs/drawings/${data[i].url}`)} title={data[0].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/>
            <div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div>
            </div>
            
          })
          }
            </div>
            <div className="column-grid">
            {
           ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'].map((i, count)=>{
            return <div><img key={count} src={require(`../imgs/drawings/${data[i].url}`)} title={data[0].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
            
          })
          }
            </div>
            <div className="column-grid">
            {
           ['22', '23', '24', '25', '26', '27', '28', '29', '30', '31'].map((i, count)=>{
            return <div><img key={count} src={require(`../imgs/drawings/${data[i].url}`)} title={data[0].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
            
          })
          }
            </div>
            <div className="column-grid">
            {
              ['32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43'].map((i, count)=>{
              return <div><img key={count} src={require(`../imgs/drawings/${data[i].url}`)} title={data[0].name} name="drawings" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
            })
            }
            </div>
          </div>
        </div>
      );
};

export default Drawings;
