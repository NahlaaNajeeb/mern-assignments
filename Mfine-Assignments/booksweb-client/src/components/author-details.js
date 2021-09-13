import React, {useState,useEffect}from 'react';
import {withRouter} from 'react-router-dom';
import {AuthorService} from '../services/author-service';
import Loading from './loading';
import NotFound from './not-found';


const Component=(props)=>{

    const [author,setAuthor]=useState(null,props,);
    const id=props.match.params.id;
    useEffect(()=>{
        
        //Author will come after a delay
        AuthorService.instance.getAuthorById(id).then((author)=>{
            console.log(`got for ${id}: ${author}`);
            setAuthor(author);
        });        
    },[props.match.params.id]);
    
    if(author===null){
        return <Loading title={`searching for ${id}`} />
    }

    if(author===undefined){
        return <NotFound message={`Sorry no Author with id: ${id} present in our record`}/>
    }


    return (
        <div className='Author-details'>
            <h2>{author.name}</h2>
            <h3>by {author.id}</h3>
            
            <div className='Author-info'>
                <img src={author.cover}/>
                <div className='info'>
                   
                    <hr/>
                    
                    <p>{author.biography}</p>
                    
                </div>
            </div>
        </div>
    );
}


export default withRouter(Component);