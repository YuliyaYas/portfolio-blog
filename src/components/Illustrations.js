import React from 'react';
import Overlay from './Overlay';
import '../stylesheet/Gallery.css';


const Illustrations = (props) =>  {
  const data = props.illustrationsData;
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
           ['53', '42', '49', '54', '46', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((i, count)=>{
            return <div key={count}><img src={require(`../imgs/illustrations/${data[i].url}`)} title={data[i].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
            
          })
          }
            </div>
            <div className="column-grid">
            {
           [ '51', '47', '57', '43', '45', '10', '11', '12', '13', '14', '15', '16', '17', '18'].map((i, count)=>{
            return <div key={count}><img src={require(`../imgs/illustrations/${data[i].url}`)} title={data[i].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
            
          })
          }
            </div>
            <div className="column-grid">
            {
           ['40', '38', '50', '56', '55', '39', '19', '20', '21', '22', '23', '24', '25', '26', '27'].map((i, count)=>{
            return <div key={count} ><img src={require(`../imgs/illustrations/${data[i].url}`)} title={data[i].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
          })
          }
          </div>
            <div className="column-grid">
            {
           ['52', '41', '48', '44', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'].map((i, count)=>{
            return <div key={count}><img src={require(`../imgs/illustrations/${data[i].url}`)} title={data[i].name} name="illustrations" style={{width:'100%'}} onClick={props.handleImageClick} alt={data[0].name}/><div className="mobile-info">{data[i].sold ? <p className="sold-mobile" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label-mobile" onClick={props.handleCloseClick}>BUY</p></a>}<p className="all-caps">{data[i].name}</p><i><p className="title">{data[i].specs}</p></i><p className="desc">{data[i].description}</p></div></div>
          })
          }
            </div>
          </div>
        </div>
      );
};

export default Illustrations;
