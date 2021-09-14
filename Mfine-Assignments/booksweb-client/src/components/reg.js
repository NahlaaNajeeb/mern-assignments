import React from 'react';
import {LabeledInput} from "./input-controls";

const Component=(props)=>{

    return (
        <div>
            <h1>User Registration</h1>
            <form >
               <LabeledInput id=" Name"/>
               <LabeledInput id="Email"/>
               <LabeledInput id="password"/>
               <button type="submit" className="btn btn-primary">Register</button>
               
            </form>

        </div>
    );
};


export default Component;