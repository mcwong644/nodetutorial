// ** start at 2:28 in https://youtu.be/Oe421EPjeBE ** stop 2:41
// ** event loop ** 

// console.log('first task');
// console.time();
// for(let i = 0; i<10000000;i++) {
//     const h3= document.querySelector('h3');
//     h3.textContent=`Hey. everyone is waiting on me`
// }
// console.timeEnd()
// console.log('next task');

console.log('first task');
setTimeout(() => {
    console.log('second task');
}, 0);

console.log('next task');

console.log('========= next example ============');
//example 2:38
const {readFile} = require('fs');
console.log('started a first task');
//check file path!!!
readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log('first task: '+result);
    console.log('completed first task');
})
console.log('starting next task');


