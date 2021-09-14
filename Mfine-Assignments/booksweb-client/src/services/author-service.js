import { contains, copyObject, delay } from '../utils/core';
import http from './http';
const url = 'http://localhost:5000/api/authors/';



export class AuthorService {
    static instance = new AuthorService();
    constructor() { }

    getAll=async ()=>{
        try{
            //TODO: your await logic here
            // let response= await axios.get(url,{
            //     headers:{
            //         "x-api-key":"LET ME PASS"                    
            //     }
            // });

            let response=await  http.get('authors'); //http://localhost:5000/api/authors
            console.log('response',response);
            return response.data;
            
        }catch(error){
            console.log('error',error);
            return null;
        }
    };


    _getAll = async () => {
        try {
            let response = await fetch(url,{
                headers:{
                    api_key:"LET ME PASS"
                }
            });
            console.log('response', response);
            if (response.status !== 200) {
                console.error('http error', response.status);
                return [];
            }
            let authors = await response.json();
            return authors;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }
    addAuthor = async (author) => {
        try{
            //let response=await axios.post(url,book);            
            let response= await http.post('authors',author);
            return {success:true, data:response.data};

        }catch(error){

            console.log('error posting data', error);
            return {success:false, error:error};
        }
    }

    
}