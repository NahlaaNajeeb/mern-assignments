const { response } = require('express');
const { Author } = require('../models/author');
const { ServiceError } = require('../utils/service-error');




function autho(object) { 

}
class AuthorService {
    constructor() { 

        const functions = [
            this.getAllAuthors,
            this.getAuthorById,
            this.updateAuthor,
            this.deleteAuthor,
            this.addAuthor,

        ];

    for(let a of functions) {
        this[a.name] = a.bind(this);
    }}

    async getAllAuthors() {
        return await Author.find();
    }

    async getAuthorById({ id }) {
        let author = await Author.findOne({ id: id });
        if (!author)
            throw new ServiceError(404, "Author not found", { id: id });

        else
            return author;
    }


    async addAuthor({ auth }) {

        try {
            let newAuthor = new Author(auth);
            await newAuthor.save();
            return newAuthor;
        }
        catch (error) {
            throw new ServiceError(404, error.message, { error });
        }
    }

    async updateAuthor({ id, auth }) {
        let author = await this.getAuthorById({ id });
        return await Author.findOneAndUpdate({ id: id }, auth);
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
module.exports = { AuthorService }