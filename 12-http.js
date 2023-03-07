// ** HTTP start at 1:34 in https://youtu.be/Oe421EPjeBE **
// refer to 12-http-b.js for working codes
// solution from 
//https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end

const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about') {    //dont work!
        res.end('here is our history');
    }
    //if(RegExp.url !=='/') {
    //    res.end(`
    //    <h1>Oops!</h1>
    //    <p>we cant find the page</p>
    //    <a href= "/">back home</a>
    //    `);
    //}
    
    
})

server.listen(5000);
