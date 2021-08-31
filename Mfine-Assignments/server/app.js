const http=require('http');
const requestHandler=function(request,response){
    console.log('Hellow world')
    if(request.url==='/time')
        response.write(new Date().toLocaleTimeString());
    response.end();      
};

const app=http.createServer(requestHandler);

const port=7000;
const server=app.listen(port,()=>
{
    console.log(`server started on port ${port}`);

});

server.on('error',error=>console.log(`error starting on port ${port}`,error))