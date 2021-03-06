import * as ActionNames from './action-names';

export const booksReducer=(books=[], action)=>{

    switch (action.type) {

        case ActionNames.BOOK_LIST:
            return action.payload;

        
        case ActionNames.BOOK_ADD:
            return [...books, action.payload];

        case ActionNames.BOOK_UPDATE:
            console.log(action);
            return books.map(a=> a.isbn===action.payload.isbn? action.payload:a); 


        case ActionNames.BOOK_DELETE:
            return books.filter(a=>a.isbn!==action.payload.isbn);

        default:
            return books;
    }
}

export const bookReducer=( book=null, action)=>{
    
    switch(action.type){

        case ActionNames.BOOK_UPDATE:
        case ActionNames.BOOK_SELECT:
        case ActionNames.BOOK_ADD:
            return action.payload;

        
            

        default:
            return book;
    }
}