const { response } = require('express');
const { ServiceError } = require('../utils/service-error');
const {Book} = require('../models/book');
const { Author } = require('../models/author');

const getAllReviews =async({id})=>{
    console.log(id)

    let book=await Book.findOne({isbn:id})
    console.log(book);
    let rev=await book.reviews
    console.log(rev,'reviews')
    if(rev)
        return rev;
    else{
        throw new ServiceError(404, 'No Reviews found',{isbn:id})
    }    
}