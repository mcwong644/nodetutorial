//https://youtu.be/f2EqECiTBL8
//Node.js Full Course for Beginners | Complete All-in-One Tutorial | 7 Hours
// dave gray, stop 15:09


const path=require("path")
const os=require('os');
// const math=require("./dg01_math")
const{ add,subtract,multiply, divide} = require("./dg01_math")

// console.log(math.add(50,60));
console.log(`add function called ${add(3,4)}`);
console.log(`divide function called ${divide(30,4)}`);
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
console.log(path.parse(__filename));