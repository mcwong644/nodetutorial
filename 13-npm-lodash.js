// ** npmstart at 1:34 in https://youtu.be/Oe421EPjeBE **
// lodash starts 2:03
// in command prompt or terminal
// npm init -y (initialize and create package.json)
// npm i lodash [to install package for local, or 
// npm -g lodash (global)]
// npm i nodemon -D (dependency), then npm start will execute script in package.json
// or npm run dev 
// npm install -g nodemon for global install
// change package.json - scripts to "start" : "node app.js" and add "dev": "nodemon app.js"
// npm run dev
// npm start will execute app.js
// npm uninstall <package name>
// npm install - will reinstall all from package.json




// npm install -g nodemon (global install) done 12/03/23

const _ = require('lodash');

const items=[1,[2,[3,4]]];
const newItems= _.flattenDeep(items);

console.log(newItems);