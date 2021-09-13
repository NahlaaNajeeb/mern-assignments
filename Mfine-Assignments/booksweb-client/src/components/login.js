

import React from 'react';

const Component=()=>{

    return (
        <div>
            
            <form >
                <h1>User Login</h1>
                <label> email: </label><br/> <input type="email" value='' placeholder="Enter your email"/><br/>
                <label> Password: </label><br/><input type="password" value='' placeholder="Enter your password"/><br/>
               <br/> <input type="submit" value="Login"/><br/>
            </form>

        </div>
    );
};


export default Component;