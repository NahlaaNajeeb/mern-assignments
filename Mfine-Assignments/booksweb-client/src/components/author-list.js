import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';

import { AuthorService } from '../services/author-service';




const Component = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorService.instance.getAll().then(setAuthors);
    });

    const handleDelete = async (author) => {

        if (window.confirm(`Delete\n${author.name}\nYou can't undo the changes`)) {
            await AuthorService.instance.removeAuthor(author.id);
            setAuthors(authors.filter(b => b.id !== author.id));
        } else {

        }
    }



     if (authors.length === 0) {
        return <Loading text="building our recommendation" />
    }
   
        return (
            <div className='author-list'>
                <image class="image-grid-col-2 image-grid-row-2" />
    
    
    
                <h2>Author List</h2>
    
                
                    <tbody>
    
                                <tr >
                                    <td><img src='/images/vivek.jpg' /></td>
                                    <br/><br/>
                                    
                                    
                                    <td><img src='/images/jeff.jpg'/></td>
                                    <td><img src='/images/ramdh.jpg'/></td>
                                    <td><img src='/images/john.jpg'/></td>
                                    <td><img src='/images/rowling.jpg'/></td>
    
                                    {/* <br/><p>name:"Vivek Dutta Mishra"</p><br/> */}
                                   
    
                                    {/* <td>
    
                                        <Link to={`/author/details/${author.id}`} className='btn btn-sm btn-primary fa fa-info'>Info</Link>
                                        <Link to={`/book/edit/${author.id}`} className='btn btn-sm btn-primary fa fa-edit'>edit</Link>
    
                                    </td> */}
                                </tr>
                            
                        
    
    
    
                    </tbody>
                {/* </table> */} 
    
    
    
            </div>);
    
    
    
    };
    
    

   


export default Component;