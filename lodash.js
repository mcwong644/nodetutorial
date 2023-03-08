// ** HTTP start at 1:34 in https://youtu.be/Oe421EPjeBE **
// lodash starts 2:03
// in command prompt or terminal
// npm init -y (initialize and create package.json)
// npm i lodash [to install package for local, or npm -g lodash (global)]
// npm i nodemon -D (dependency)
const _ = require('lodash');

const items=[1,[2,[3,4]]];
const newItems= _.flattenDeep(items);

console.log(newItems);