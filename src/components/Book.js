import React from 'react';
import '../stylesheet/Book.css'
const Book = () =>  {
    return (
        <div id="amz-container"><hr></hr><a href="https://www.amazon.com/dp/1673973914?ref_=pe_3052080_397514860" target="_blank" rel="noopener noreferrer"><img id="now-on-amazon" src={require('../imgs/amazon.png')} alt="Coloring book"/>
            <img id="amazon" src={require('../imgs/amz.png')} alt="Coloring book"/>
            <div className="amz-description"> 
                <p id="title">Tiny Houses: coloring book</p>
                <div id="author">by Yuliya Yasenetska</div>
                <div id="amz-about">Whimsical coloring book for adults and kids to explore your own artistic self. </div> 
                <div id="paperback">Paperback</div>
                <div><em>$9.99</em> <span>to buy</span></div>
            </div>
            </a><hr></hr>
        </div>
    )
}

export default Book;