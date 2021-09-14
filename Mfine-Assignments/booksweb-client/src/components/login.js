

import React from 'react';
import {LabeledInput} from "./input-controls";

const Component=()=>{

    return (
        <div>
            
            <form >
                <h1>User Login</h1>
                <LabeledInput id="Email"/>
               <LabeledInput id="password"/>
               <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
    );
};


export default Component;