const { response } = require('express');
const {Author} = require('../models/author');
const {ServiceError}= require('../utils/service-error');

function bindMethods(object){
    console.log('started binding...',object);
    for(let prop in object){
        let propValue=object[prop];
        console.log('prop',prop);
        if(typeof(propValue)==='function'){
            console.log('binding', propValue);
            propValue.bind(object);
        }
    }
}

class AuthorService{
    constructor(){
        const functions=[
            this.getAllAuthors,]
    //         this.getAuthorsByName,
    //         this.getAuthorsById,
    //         this.getAuthorsByPhoto,
    //         this.getAuthorsByBiography,
    //     ];

    //     for(let f of functions){
    //         //console.log(f.name); 
    //         this[f.name] = f.bind(this);
    //     }

    // }

    async getAllAuthors(){
        return await Author.find();
    }

    async getAuthorsByName({name}){
        return await Author.find({author:a})

    }

    // async getAuthorsById({id}){
    //     let auth=await Author.findOne({id});
    //     if(!auth)
    //         throw new ServiceError(404, "Invalid Book Id", {isbn:id});
    //     else
    //         return auth;       


    // }

    // async getAuthorsByPhoto(){
    //     return await Author.find({photo:/photo/i})

    // }

    // async getAuthorsByBiography(){
    //     return await Author.find({biography:/biography/i})
    // }



    


}


module.exports={AuthorService}
