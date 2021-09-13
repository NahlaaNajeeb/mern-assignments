import React, {useState,useEffect} from 'react';
import AuthorEditor from './author-editor'
import {AuthorService} from '../services/author-service';
import {useParams, useHistory} from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';


const Component=(props)=>{

    console.log('props',props);
    const[author,setAuthor]=useState(null);

    

    

    const {id}=useParams();
    console.log('id',id);

    const history=useHistory();
    
    
     useEffect(()=>{
       AuthorService.instance.getAuthorById(id).then(setAuthor);
     })

    if(author===null){
        return <Loading/>
    }

    if(author===undefined){
        return <NotFound title="author Not Found" message={`Missing id: ${id}`}/>
    }

    const handleSave=(author)=>{
        console.log('author',author);
        AuthorService.instance.update(id,author);
        history.push('/author/list'); //goto /author/list
    };

    return (
        <div>
            <h2>Edit Info</h2>
            <AuthorEditor author={author} onSave={handleSave}/>
        </div>
    );
};


export default Component;