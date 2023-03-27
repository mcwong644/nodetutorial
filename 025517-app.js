// ** https://github.com/john-smilga/node-express-course **
// ** start at 2:47:15 in https://youtu.be/Oe421EPjeBE ** 
// ** stop 2:55:17
// ** event loop ** 
// async with blocking codes will still block other users
// error 'ERR_STREAM_WRITE_AFTER_END' 
// solution=https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end
// use return after if

const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end('home page')
        return;
    }
    if (req.url === '/about'){
        // BLOCKING CODE
        for(let i =0;i <500;i++){
            for(let j =0;j <500;j++){
                console.log(`${i},${j}`);
            }    
        }
        res.end('about page')
        return;
    } else {
    res.end('Error page');
    return;
    }});

server.listen(5000,()=>{
    console.log('server listening on port 5000...!!');
})