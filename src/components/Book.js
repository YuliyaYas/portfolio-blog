import React from 'react';
import '../stylesheet/Book.scss'
const Book = () =>  {
    return (
        <div><hr></hr>
            <div className="row">
            <a href="https://www.amazon.com/dp/1673973914?ref_=pe_3052080_397514860" target="_blank" rel="noopener noreferrer">
                <div className="column-img">
                     <img src={require('../imgs/amz.png')} alt="Coloring book"/>
    
                </div>
                <div className="column-desc">
                    
                    <div className="amz-description"> 
                        <p id="title">Tiny Houses: coloring book</p>
                        <div id="author">by Yuliya Yasenetska</div>
                        <div id="amz-about">If you love the charm of whimsical animals and tiny homes, this coloring book is perfect for you. It’s a wonderful gift for yourself, a friend, or anyone who enjoys the calming art of coloring.</div> 
                        <div><b>“Tiny Houses” coloring book features:</b></div>
                        <ul>
                            <li>Hand-drawn, intricate illustrations ready to color.</li>
                            <li>    Single-sided pages to prevent bleed-through (if using markers, place a protective sheet behind the page you're coloring).</li>
                            <li>High-resolution crisp images.</li>
                            <li>Paper size: 8.5 x 11 inches.</li>
                            <li>Paper weight: 60 pounds, 90 grams per square meter.</li>
                        </ul>
                        {/* <div id="paperback">Paperback</div> */}
                       
                    <div><span> <img src={require('../imgs/amazon.png')} alt="Coloring book"/></span><em>$9.99</em> <span>to buy</span></div>
                   
                </div>
                </div>
                </a>
            </div>
            <hr></hr>
            
        </div>
    )
}

export default Book;