// __dirname    - path to current directory
// __filename   - filename
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the pgm is being executed

console.log(__dirname);
console.log(__filename);
let myName=__filename;
setInterval(() =>{
    // let myName='Dave';
    console.log('hello world to '+'"'+myName+'"');
},1000);