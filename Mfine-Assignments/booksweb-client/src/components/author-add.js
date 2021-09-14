import React, {useState}from 'react';
import AuthorEditor from './author-editor'
import {AuthorService} from '../services/author-service';
import {withRouter} from 'react-router-dom';




const Component=(props)=>{
    const[errors,setErrors]=useState(null, props);


    

    const author={
        name:'',
        id:'',
        photo:'',
        biography:'',
    };

    const handleSave=async(author)=>{
        const result=await AuthorService.instance.addAuthor(author);
       
        if(result.success)
            props.history.push('/author/list'); //goto /author/list
        else{
            const _errors= result.error.response.data.error.errors;
            setErrors(_errors);
        }
    };

    return (
        <div>
            <h2>Add New Author</h2>
            <AuthorEditor author={author} onSave={AuthorService.instance.addAuthor}/>
        </div>
    );
};


export default withRouter(Component);