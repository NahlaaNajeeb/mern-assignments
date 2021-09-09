import React from 'react';
import "./book-details.css";
import {useState} from 'react';
import ReadMoreReact from  'read-more-read-less react';


const Component=({book})=>{

    
    
    return (
        <div className='book-details'>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <div className='book-info'>
                <img src={book.cover}/>
                <div className='info'>
                    <ul>
                        <li>Price: {book.price}</li>
                        <li>Rating: {book.rating}</li>
                    </ul>
                    <hr/>
                    <h4>Synopsis</h4>


                    <ReadMoreReact text={book.description}
                    min={70}
                    ideal={90}
                    max={150}
                    readLesMoreText='readmore...'/>
                    
                        {/* <Expander title="Synopsis" content={book.description} short={200} /> */}
                    
                     
                    </div>
                    
                    

        
           
    
    
        
                    
                </div>
            </div>
       
    );
}


export default Component;