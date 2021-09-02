const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const getBookRouter=require('./routes/books-api-route');
const {DB_USER,DB_PASSWORD,DB_URL}=process.env;

//const uri = "mongodb+srv://training:training%23123@training.wbunv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/myFirstDatabase?retryWrites=true&w=majority`;
//console.log('uri',uri);


function configureExpress(basePath){
    const app=express();   
    app.use(bodyParser.json());
    app.use(express.static(path.join(basePath, 'public')));  

    //console.log(getBookRouter);
    //console.log(getBookRouter());
    
    app.use('/api/books', getBookRouter());

    return app; 
};

module.exports={
    configureExpress
};