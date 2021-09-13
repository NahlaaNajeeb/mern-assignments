import React from 'react';

const Component=()=>{

    return (
        <div>
            
            <form >
                <h1>User Registration</h1>
                <label>First Name: </label><br /><input type="text" value='' placeholder="Enter your first Name"/><br />
                <label>Last Name: </label><br/><input type="password" value='' placeholder="text" value='' placeholder="Enter your last Name"/><br/>
                <label> email: </label><br/><input type="email" value='' placeholder="Enter your email"/><br/>
                <label>Password </label><br/><input type="password" value='' placeholder="Enter your password"/><br/>
                <br/><input type="submit" value="Register"/>
            </form>

        </div>
    );
};


export default Component;