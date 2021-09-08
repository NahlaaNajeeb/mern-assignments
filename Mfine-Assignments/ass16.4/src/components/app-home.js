import { render } from '@testing-library/react';
import React, { Component } from 'react';
import app from './app-footer';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); //changing to button element
        this.state = {
            curImage:0,  //starting from 0the book



            pictures: [

                '/images/coverpage.jpg',
                '/images/jane.jpg',
                '/images/cities.jpg',
                '/images/frank.jpg',
                '/images/tower.jpg',
            ]

        };

    }
    handleClick = () => {
        if (this.state.curImage < this.state.pictures.length) {
            this.setState({                       //new state
                curImage: this.state.curImage + 1 //assigbing newvalue to state
            });

        }
        else {
            this.setState({
                curImage: 0
            });

        }
        return this.curImage;
    }

render(){
    return (
        <div className='bodypart'>
            <h2>Home Page</h2>
            <p>
                Welcome to Book's web Home page
                <img className='bodyimage' src={this.state.pictures[this.state.curImage]} alt='pictures'/>
                <button onClick={this.handleClick}>Refresh</button>
            </p>
                

        

            </div>
           
            
        
    );
    }
}




export default Home;