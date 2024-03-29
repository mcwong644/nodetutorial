// ** https://github.com/john-smilga/node-express-course **
// ** start at 2:55:17 in https://youtu.be/Oe421EPjeBE ** 
// ** stop 3:12:11
// Promise, async await

const {readFile,writeFile} = require('fs').promises;
// const util=require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const { reject } = require('lodash');
// const path = require('path');
// const { resolve } = require('path');

// const getText=(path)=>{
//     return new Promise((resolve,reject)=> {
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//                 // return;
//             }else{
//                 resolve(data);
//                 // console.log(data);
//             }
//         })
        
//     })
// }

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err) =>console.log(err))
    
const start = async()=>{
    try{
        const first=await readFile('./content/first.txt','utf-8');
        const second=await readFile('./content/second.txt','utf-8');
        await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME: ${first} ${second}\n`,{flag:'a'});
        console.log(first,second);

    } catch(error){
        console.log(error);
    }
}

start();