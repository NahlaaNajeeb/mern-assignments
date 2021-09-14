const express=require('express');
const {AuthorService}=require('../services/author-service');
const {handleRequest}=require('../utils/express-utils');


const getRouter= ()=>{

    
    const service=new AuthorService();
 
 
     let router=express.Router();
    //  router.get('/authors',AuthorController.getAllAuthors);



     router  
        .route("/")    
        .get(handleRequest(service.getAllAuthors))
        .post(handleRequest(service.addAuthor));
        router
        .route('/id')
        .get(handleRequest(service.getAuthorById))
        .put(handleRequest(service.updateAuthor))
        .delete(handleRequest(service.deleteAuthor));
        return router;

   
  
 
 
 };
 
 
 module.exports=getRouter;