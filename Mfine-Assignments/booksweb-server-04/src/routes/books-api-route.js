const express=require('express');
const {BookService}=require('../services/book-service');
const {handleRequest}=require('../utils/express-utils');




const getRouter= ()=>{

   //const bookController=new BookController();
   const service=new BookService();


    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")    
        .get(handleRequest(service.getAllBooks))
        .post(handleRequest(service.addBook));



  //--->  api/books/titles
  router.get('/titles', handleRequest(service.getAllTitles));

  //---> api/books/Authors
  router.get('/authors',handleRequest(service.getAllAuthors));

  //deleting boook
router.get('/book/delete/:id',(request,response)=>{

  let id= request.params.id;
  console.log('deleting book', request.params);
  
  let book=books.find(b=>b._id===id);
  let index=books.findIndex(b=>b._id===id);
  if (index > -1) {
      books.splice(index, 1); //delete a particular item in index
    }

  


  //pass the book object here
  response.render('book/delete',{book}); 
}); 

  

    //---->  api/books/5555
    router 
    .route('/:id')
    .get(handleRequest(service.getBookByIsbn))
    .put(handleRequest(service.updateBook))
    .delete(handleRequest(service.removeBook));


 
  router.get('/by/:author',handleRequest(service.getBooksByAuthor));

  router.get('/search/term',handleRequest(service.search));
  
  
  return router;


};


module.exports=getRouter;

