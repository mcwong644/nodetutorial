// /commonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

// Template literals are enclosed by backtick ( ` ) characters 
// instead of double or single quotes. Along with having normal strings,
// template literals can also contain other parts called placeholders, 
// which are embedded expressions delimited by a dollar sign and 
// curly braces: ${expression} 
// refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// semi colons are automatically inserted

// ** stop at 53min 57sec in https://youtu.be/Oe421EPjeBE **

const names = require('./4-names'); //use sayHi(names.john)

//const {n1,n2} = require('./4-names'); dont work
// below alternative works
const {john, peter,name2} = require('./4-names'); //use sayHi(john)

const sayHi= require('./5-utils');
//console.log(names);

const data = require('./6-alternative-flavor')
//using mind-grenade.js
require('./7-mind-grenade');

sayHi('susan');
sayHi("-using names = require('./4-names'): "+ names.john);
sayHi("-using names = require('./4-names'): "+ names.peter);
sayHi("-using alt flavor data = require('./6-alternative-flavor'): " + data.singlePerson.name); //using 6-alternative-flavor.js
sayHi(`-using {john, peter,name2}  = require('./4-names'): ${john}`);
sayHi(`-using {john, peter,name2}  = require('./4-names'): ${peter}`);
sayHi(`-using {john, peter,name2}  = require('./4-names'): ${name2}`);

//sayHi(n1)
//sayHi(n2)