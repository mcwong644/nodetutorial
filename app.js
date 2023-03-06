// ** HTTP start at 1:34 in https://youtu.be/Oe421EPjeBE **
// lodash starts 2:03

const _ = require('lodash');

const items=[1,[2,[3,4]]];
const newItems= _.flattenDeep(items);

console.log(newItems);