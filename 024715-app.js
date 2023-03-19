// ** start at 2:46 in https://youtu.be/Oe421EPjeBE ** 
// ** stop 2:47:15
// ** event loop ** 

const http = require('http');

const server=http.createServer((req,res)=> {
    console.log('request event');
    res.end('hello worldxxx');
})

server.listen(5000, ()=>{
    console.log('server listening on port :5000....');
})