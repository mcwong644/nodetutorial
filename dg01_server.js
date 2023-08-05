//https://youtu.be/f2EqECiTBL8
//Node.js Full Course for Beginners | Complete All-in-One Tutorial | 7 Hours
// dave gray, stop 


const path=require("path")
const os=require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(`helloo`);
// console.log(global);
console.log("=============");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));