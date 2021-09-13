import React, {useState}from 'react';
import AuthorEditor from './author-editor'

import {withRouter} from 'react-router-dom';
import { AuthorService } from '../services/author-service';


const Component=(props)=>{

    

    const author={
        name:'',
        id:'',
        photo:'',
        biography:'',
    };

    const handleSave=(author)=>{
        AuthorService.instance.addAuthor(author);
        props.history.push('/author/list'); 
    };

    return (
        <div>
            <h2>Add New Author</h2>
            <AuthorEditor author={author} onSave={handleSave}/>
        </div>
    );
};


export default withRouter(Component);