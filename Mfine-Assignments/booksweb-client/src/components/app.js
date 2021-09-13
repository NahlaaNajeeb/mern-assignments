import React,{useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppHome from './app-home';
import BookDetails from './book-details';
import BookList from './book-list';
import BookAdd from './book-add';
import NotFound from './not-found';
import BookEdit from './book-edit';
import If from './if';
import Signin from './login';
import Signup from './reg';
import AuthorDetails from './author-details';
import AuthorList from './author-list';
import AuthorAdd from './author-add';
import AuthorEdit from './author-edit';






const Component=({title})=>{
   
    return <div className='main'>
           

            <BrowserRouter>
                <AppHeader title={title} />
                <div className='container'>
                    <Switch>
                        
                        <Route path="/" exact={true} >
                            <AppHome title="Book's Home"/>
                        </Route>
                        
                        <Route path="/book/list">
                            <BookList />
                        </Route>

                        <Route path="/book/add" component={BookAdd} />
                        
                        <Route path="/book/details/:isbn" >
                            <BookDetails  />
                        </Route>
                        <Route path="/book/edit/:isbn" >
                            <BookEdit  />
                        </Route>
                        <Route path="/user/signin" >
                            <Signin />
                        </Route>
                        <Route path="/user/signup" >
                            <Signup />
                            </Route>
                        <Route path="/author/details" >
                            <AuthorDetails />
                        </Route>
                        <Route path="/author/add" >
                            <AuthorAdd/>
                        </Route>
                        <Route path="/author/edit" >
                            <AuthorEdit/>
                        </Route>
                        <Route path="/author/list" >
                            <AuthorList/>
                        </Route>
                        <Route path="*" component={NotFound} />
                        
                    </Switch>
                </div>            
                <AppFooter copyright="conceptarchitect.in" url="http://conceptarchitect.in" />
            </BrowserRouter>           

            
        </div>;
};


export default Component;