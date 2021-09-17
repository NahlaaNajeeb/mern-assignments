import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';
import { BookService } from '../services/book-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faEdit, } from '@fortawesome/free-solid-svg-icons'





const Component = () => {

    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null);

    useEffect(() => {
        BookService.instance.getAll().then(setBooks);
    }, []);

   
    if (books === null) {
        return <NotFound title="Error Connecting to Server" message="Ple try a little Later" />
    }



    if (books.length === 0) {
        return <Loading text="building our recommendation" />
    }

    return (
        <div>

            <h2>Book List</h2>
            <div className='body'>
                <div className='container'>




                    <div className='list'>
                        <img src="http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg" />
                        <div className='name'> The Lost Epic</div>
                        

                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>


                    </div>
                    <div className='list'>
                        <img src="https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg" />
                        <div className='name'>Harry Potter</div>
                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                    </div>
                    <div className='list'>
                        <img src= "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg"/>
                        <div className='name'>Harry Potter and the Half Blood Prince</div>
                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                    </div>
                    <div className='list'>
                        <img src="https://cdn11.bigcommerce.com/s-z7qq7adctg/images/stencil/500x659/products/674092/774560/btcl__84587.1522183285.jpg?c=2" />
                        <div className='name'>Harry Potter and the Chamber of Secrets</div>
                        <button className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                    </div>
                    {/* <div className='list'>
                        <img src='/images/rowling.jpg' />
                        <div className='name'>JK Rowling</div> */}
                        
                    
                        

                        <button   className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></button>
                        <button className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></button>

                        
                    </div>
                </div>






                {/* <tbody>
                    {
                        books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.name}</td>

                                <td>

                                    <Link to={`/book/details/{book.id}`} className='btn btn-sm btn-primary '><FontAwesomeIcon icon={faInfo} /></Link>
                                    <Link to={`/book/edit/{book.id}`} className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faEdit} /></Link>

                                </td>
                            </tr>
                        ))
                    }
                </tbody> */}
            </div>
        // </div>);

    );
}






export default Component;