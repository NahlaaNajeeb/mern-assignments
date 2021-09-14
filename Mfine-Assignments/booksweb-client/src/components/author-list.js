import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';
import { AuthorService } from '../services/author-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faEdit, } from '@fortawesome/free-solid-svg-icons'





const Component = () => {

    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        AuthorService.instance.getAll().then(setAuthors);
    }, []);

    // const handleDelete = async (author) => {
    //     setAuthor(author);

    // }
    if (authors === null) {
        return <NotFound title="Error Connecting to Server" message="Ple try a little Later" />
    }



    if (authors.length === 0) {
        return <Loading text="building our recommendation" />
    }

    return (
        <div>

            <h2>Author List</h2>
            <div className='body'>
                <div className='container'>




                    <div className='list'>
                        <img src='/images/vivek.jpg' />
                        <div className='name'>Vivek-dutta mishra</div>
                        

                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>


                    </div>
                    <div className='list'>
                        <img src='/images/jeff.jpg' />
                        <div className='name'>jeffrey Archer</div>
                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                    </div>
                    <div className='list'>
                        <img src='/images/ramdh.jpg' />
                        <div className='name'>Ramdhari-singh dinkar</div>
                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                    </div>
                    <div className='list'>
                        <img src='/images/john.jpg' />
                        <div className='name'>John Grisham</div>
                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                    </div>
                    <div className='list'>
                        <img src='/images/rowling.jpg' />
                        <div className='name'>JK Rowling</div>
                        
                    
                        

                        <button   className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                        
                    </div>
                </div>






                {/* <tbody>
                    {
                        authors.map((author) => (
                            <tr key={author.id}>
                                <td>{author.name}</td>

                                <td>

                                    <Link to={`/author/details/{author.id}`} className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></Link>
                                    <Link to={`/book/edit/{author.id}`} className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></Link>

                                </td>
                            </tr>
                        ))
                    }
                </tbody> */}
            </div>
        </div>);


}






export default Component;