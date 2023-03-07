// ** HTTP start at 1:34 in https://youtu.be/Oe421EPjeBE **
// alternate solution using res.write from 
//https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end


const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.write('Welcome to our home page')
    } else if(req.url==='/about') {    //dont work!
        res.write('here is our history');
    } else {
        res.write(`
        <h1>Oops!</h1>
        <p>we cant find the page</p>
        <a href= "/">back home</a>
        `);
    }
    res.end();
    
})

server.listen(5000);
