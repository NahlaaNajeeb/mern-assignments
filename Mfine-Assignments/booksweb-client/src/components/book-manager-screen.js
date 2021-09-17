import React,{useEffect} from 'react';
import BookEditor from './book-editor';
import { useSelector, useDispatch } from 'react-redux';
import {getAllBooks,selectBook} from '../store/book-action';
import If from './if';
import Loading from './loading';

const BookList = ({ onBookSelect }) => {

    const books = useSelector(state => state.books);
    const selectedBook=useSelector(state => state.selectedBook);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(books.length===0){
            getAllBooks(dispatch);    
        }
    },[]);


    const loadBooks=()=>{
        getAllBooks(dispatch);
    }



    const handleSelectBook=(book)=>{
        selectBook(dispatch,book);
    }

    const selectClassName=(book)=>{
        let className="list-group-item list-group-item-action";
        if(book===selectedBook)
            className+=" active";

        return className;
    }

    return (
        <div className="list-group" >
            <If condition={books.length===0}>
                {/* <button onClick={loadBooks}>Load Books</button> */}
                <Loading compact/>
            </If>
            {
                books.map(book => (
                    <button type="button" key={book.isbn} onClick={()=>handleSelectBook(book)} className={selectClassName(book)}>
                        {book.title}
                    </button>
                ))
            }

        </div >
    );

};



const BookManagerScreen = (props) => {



    return (<div className="Book-manager">
        <h2>Book Manager</h2>
        <div className='row Book-manager'>
            <div className='col col-4 Book-list'>
                <BookList />
            </div>
            <div className='col col-8'>
                <BookEditor />
            </div>
        </div>
    </div>);
};

export default BookManagerScreen;