const {Book} =require('../models/book');
const { ServiceError, checkRequired, valisbnate } = require('../utils/service-error');



const addBook=async({body})=>{

    checkRequired(body,"title","isbn","author","price","description","tags");
    let book= new Book(body);
    const result=await book.save();
    return result;
}

const getAllBooks= async ()=>{

    return await Book.find();
} 

const getBookByIsbn=async({isbn})=>{
    console.log('getting Book by isbn',isbn);
    const book=Book.findOne({isbn});
    if(!Book) 
        throw new ServiceError(404, "Book not found",{isbn});
    else
        return book;
}

const getAllTitles=async ()=>{

    let books = await Book.find({}, { title: true }).sort({ title: 1 });
    let titles = books.map(book => book.title);

    return titles;

}
const getBooksByAuthor=async({ author })=>{
    const a = new RegExp(author, 'i');
    return Book.find({ author: a })
}

const updateBook=async({ id, body }) =>{
    let book =await this.getBookByIsbn({ id });
    await Book.findOneAndUpdate({ isbn: id }, body);
    return await Book.findOne({ isbn: id });
}

const getAllAuthors=async()=>{
    return await Book.distinct('author');
}

const removeBook=async({isbn})=>{
    let Book=await getBookByIsbn(isbn);
    await Book.remove();
}

const getBooksByTag=async({ tag })=> {
    return await Book.find({ tag: /tag/i })
}

const search=async({ q })=>{
    const a = new RegExp(q, 'i');
    return await Book.find({ $text: { $search: a } })
}



module.exports={
    addBook,
    getAllBooks,
    getBookByIsbn,
    updateBook,
    getAllTitles,
    getAllAuthors,
    getBooksByAuthor,
    removeBook
}