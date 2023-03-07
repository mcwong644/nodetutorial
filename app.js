// ** start at 1:49 in https://youtu.be/Oe421EPjeBE ** stop 2:28
// ** npm **
// in command prompt or terminal
// npm init -y (initialize and create package.json)
// npm i lodash [to install package for local, or npm -g lodash (global)]
// npm i nodemon -D (local dependency) 
// npm install -g nodemon for global install
// change package.json - scripts to "start" : "node app.js" and add "dev": "nodemon app.js"
// npm run dev
// npm start will execute app.js
// npm uninstall <package name>
// npm install - will reinstall all from package.json

const _ = require('lodash');

const items=[1,[2,[3,4]]];
const newItems= _.flattenDeep(items);

console.log(newItems);
console.log("hello people");