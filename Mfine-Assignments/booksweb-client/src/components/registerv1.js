// import React,{Component} from 'react';

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {                //value given by user is stored here.first empty
//             firstName:'',
//             lastName:'', 
//             email: '',
//             password: '',
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)    //gets current value of state and add it to an array

//     firsthandler=(event) => {
//         this.setState({
//             firstName:event.target.value})  //gets value from the input box
    
//     }

//     lasthandler=(event) => {
//         this.setState({lastName:event.target.value})
//     }

//     emailhandler=(event) => {
//         this.setState({email:event.target.value})

//     }

//     passwordhandler=(event) => {
//         this.setState({password:event.target.value})

//     }

//     }

//     handleSubmit=(event) => {
//         this.setState({
//             firstName:'', 
//             lastName:'', 
//             email: '',
//             password: '',
//         })
//         event.preventDefault()

//     }

//    render=()=>{
//        return(
//            <div className="forms">
//                <form onsubmit={this.handleSubmit}>
//                     <h1>User Registration</h1>
//                     <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Enter your first Name"/>
//                     <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Enter your last Name"/>
//                     <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Enter your email"/>
//                     <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Enter your password"/>
//                     <input type="submit" value="Register"/>
//                </form>

//            </div>
//        )


//    } 
// }






// export default Form;