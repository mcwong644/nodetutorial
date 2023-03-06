

const {readFileSync,writeFileSync} = require('fs');
// const fs = require('fs'); same - use fs.readFileSync()

console.log('start');
// const first = readFileSync('.\content\first.txt','utf-8'); ERROR using '\'
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//console.log(first,second);
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}\n`,{ flag: 'a' } // added newline "\n"
);
console.log('done with ths task');
console.log('starting the next one');