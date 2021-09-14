const { response } = require('express');
const { Author } = require('../models/author');
const { ServiceError } = require('../utils/service-error');



function bindMethods(object) {
    console.log('started binding...', object);
    for (let prop in object) {
        let propValue = object[prop];
        console.log('prop', prop);
        if (typeof (propValue) === 'function') {
            console.log('binding', propValue);
            propValue.bind(object);
        }
    }
}

class AuthorService {
    constructor() {

        const functions = [
            this.getAllAuthors,
            this.addAuthor,
            this.getAuthorById,
            this.updateAuthor,
            this.deleteAuthor
            
        ];
        for (let f of functions) {
            this[f.name] = f.bind(this);
        }
    }
    async getAllAuthors() {
        return await Author.find();
    }

    async getAuthorById({id}) {
        let author = await Author.findOne({ id: id });
        if (!author)
            throw new ServiceError(404, "Invalid Author Id", { id: id });

        else
            return author;
    }
    async addAuthor({body}){
        try{
            
            let authorData={...body};
            console.log('authorData',authorData);
            let newAuthor= new Author({...body});
            console.log('new Author',newAuthor);
            await newAuthor.save();
            return newAuthor;
        } catch(error) {
            console.log('error saving', error);
            if(error.constructor.name==="ServiceError")
                throw error;
            else
                throw new ServiceError(400, error.message, {error});
        }
    }
  /*  async addAuthor({ body }) {
        try {
            let newAuthor = new Author(body);
            await newAuthor.save();
            return newAuthor;
        }
        catch (error) {
            throw new ServiceError(404, error.message, { error });
        }
    }*/
    async updateAuthor({ id, body }) {
        let author = await this.getAuthorById({ id });
        return await Author.findOneAndUpdate({ id: id }, body);

    }
    async deleteAuthor({ id }) {
        try {
            let author = await Author.getAuthorById({ id });
            return author.delete();
        }
        catch (e) {
            console.log(e);
        }

    }
}
module.exports = { AuthorService };