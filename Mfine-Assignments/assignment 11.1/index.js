const express=require('express');
const Path=require('path');
const bodyParser=require('body-parser');
const fs=require('fs');

const app=express();
//add your middlewares here

//configure your view engine 
app.set('view engine','ejs');
//set view path location
app.set('views', Path.join(__dirname, 'src','views'))


//express should automatically handle static files
app.use(express.static(Path.join(__dirname, 'public')));

//handles form encoded data
app.use(bodyParser.urlencoded());

//handles json data
app.use(bodyParser.json());
 


//you data is configured here
let users=[];
const dbPath=Path.join(__dirname,'src','db','books-db.json');
fs.readFile(dbPath,(err,data)=>{
    if(err) {
        console.log('error reading db', err);
        return ;
    }

    books=JSON.parse(data);
    console.log(`total ${books.length} loaded...`);
});






//add you application url handlers here





app.get('/user/login:id',(request,response)=>{
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");




    //pass the book object here
    response.render('book/delete',{book}); 
}); 

app.get('/user/reg',(request,response)=>{
    response.render('user/reg');

});
app.get('/user/login',(request,response)=>{
    response.render('user/login');

});

// app.post('/book/add',(request,response)=>{

    
app.post('/user/login',(request,response)=>{

        //console.log('request.body',request.body);
    
        
    
            
            response.redirect('user/login'); //goto book list page
    
    
        //response.send('book is added');
       
    
    });

     



app.post('/user/reg',(request,response)=>{

    //console.log('request.body',request.body);

    let user =request.body;
    user._id=`${Date.now()}`; //temp id

    users.push(user); //add the book to the array

    fs.writeFile(dbPath, JSON.stringify(user), (error)=>{
        if(error){
            console.log('error saving data',error);
        } 

        
        response.redirect('/'); //goto book list page
    });

    //response.send('book is added');
   

});
 
const port=5000;
const server=app.listen(port,()=>console.log(`server started on port ${port}`));
server.on('error', error=>console.log('error',error.message));
