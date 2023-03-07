// ** HTTP start at 1:34 in https://youtu.be/Oe421EPjeBE **
// solution from 
//https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end


const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our home page')
    } else if(req.url==='/about') {    //dont work!
        res.end('here is our history');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>we cant find the page</p>
        <a href= "/">back home</a>
        `);
    }
    
    
})

server.listen(5000);
