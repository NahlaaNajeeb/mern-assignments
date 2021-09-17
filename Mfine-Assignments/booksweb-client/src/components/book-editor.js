import React, { useState,useEffect } from 'react';
import { IconInput } from './input-controls';
import {UserService} from '../services/user-service';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserAlt,faTags, faImage, faInfo,  faKey , faWindowClose, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import {useSelector,useDispatch} from 'react-redux';

import {updateBook,addBook} from '../store/book-action';
import * as ActionNames from '../store/action-names';


const Component = (props) => {


    const getEmptyBook=()=>({title:'',isbn:'',author:'', price:'',description:'',tags:''});

    const [book, setBook] = useState(getEmptyBook());
    const [errors, setErrors] = useState(null);

    const [createMode, setCreateMode] = useState(true);


    //const history = useHistory();

    let selectedBook= useSelector(state => state.selectedBook);
    let status=useSelector(state => state.status);
    const dispatch=useDispatch();

    if(status.type===ActionNames.STATUS_ERROR){
        console.log('error',status.error);
    }

    useEffect(()=>{
       // console.log('selected book changed',selectedbook);
        if(selectedBook) 
                setBook(selectedBook);
        else
                setBook(getEmptyBook());

        setCreateMode(selectedBook===null); //if no selected book I am creating a new one
    },[selectedBook]);


    const handleChange = (isbn, value) => {
        book[isbn] = value;
        setBook({ ...book });
    }

    const handleSave = async(e) => {
        e.preventDefault();
        if(createMode){
            addBook(dispatch,book);
            
        } else
            updateBook(dispatch,book);
    }

    const handleNewbook= e=>{
        setCreateMode(true);
        setBook(getEmptyBook());;
    }

    if(!book)
        return null;

    return (
        <div className="book-editor">
            <button class='btn btn-primary ' onClick={handleNewbook}>New book</button>
            <div className="row">           
                
                <div className='col col-8'>
                    
                    <form>
                        <IconInput disabled={!createMode} value={book.title} id="title" icon={faUserAlt} placeholder="book's Name" onChange={handleChange} />
                        <IconInput disabled={!createMode} value={book.isbn} id="isbn" icon={faKey} placeholder="Friendly Id with no space" onChange={handleChange} />
                        {/* <IconInput value={book.photo} id="photo" icon={faImage} placeholder="photo url" onChange={handleChange} /> */}
                        <IconInput value={book.description} id="description" icon={faKey} placeholder="book's description" onChange={handleChange} />
                        <IconInput value={book.tags} id="tags" icon={faTags} placeholder="Important Keywords" onChange={handleChange} />
                        <IconInput value={book.price} id="price" icon={faTags} placeholder="Price" onChange={handleChange} />
                        <button onClick={handleSave} type="submit" className='btn  btn-primary'>
                            <FontAwesomeIcon icon={faUserPlus}/>
                             &nbsp;&nbsp;{createMode?"Add":"Update"}
                        </button>
                        <button onClick={handleSave} type="submit" className='btn  btn-danger'>
                            <FontAwesomeIcon icon={faWindowClose}/>
                             &nbsp;&nbsp; Cancel
                        </button>
                        {status.type===ActionNames.STATUS_ERROR&&<p className="text text-danger">{status.error?.response?.data?.message}</p>}
                        
                    </form>
                </div>
                <img src={book.photo} alt={book.name} className='col col-4'/>
            </div>
 
        </div>
           );
};

export default Component;