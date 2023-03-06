// ** stop at 1:27:25 in https://youtu.be/Oe421EPjeBE **

const {readFile,writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err) {
        console.log('ERROR first.txt:' + err);
        return;
    }
    //console.log('1st file result:' + result);
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        //console.log('2nd file result:' + result);
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first},${second}\n`,{flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            //console.log('Write file result:' + result);
            console.log('done with this task');
        },
        
        
        )
    })
})
console.log('starting next task');