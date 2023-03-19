// ** https://github.com/john-smilga/node-express-course **
// ** start at 2:47:15 in https://youtu.be/Oe421EPjeBE ** 
// ** stop 
// ** event loop ** 

const http = require('http');

const server=http.createServer((req,res)=> {
    console.log('request event');
    res.end('hello worldxxx');
})

server.listen(5000, ()=>{
    console.log('server listening on port :5000....');
})