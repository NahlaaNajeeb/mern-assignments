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
            ],

            quotes :[
                
                <p>
          “I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.” — Charlotte Brontë, Jane Eyre
                
            
            
           “It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.” — Charles Dickens, A Tale of Two Cities
                
          "Beware; for I am fearless, and therefore powerful.” — Mary Shelley, Frankenstein
            
            "There is some good in this world, and it’s worth fighting for."— J.R.R. Tolkien, The Two Towers</p>
                
           

            ],

        };

    }
    handleClick = () => {
        if (this.state.curImage < this.state.pictures.length) {
            this.setState({                       //new state
                curImage: this.state.curImage + 1 
                //assigbing newvalue to state
           
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
                <p> className='quote' src={this.state.quotes[this.state.curImage]} <p/>
                <img className='bodyimage' src={this.state.pictures[this.state.curImage]} alt='pictures'/>
                <button onClick={this.handleClick}>Refresh</button>
            </p>
                

        

            </div>
           
            
        
    );
    }
}




export default Home;