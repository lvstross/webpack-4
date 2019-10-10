require('babel-runtime/regenerator');
require('./main.css');
require('./images/lion.jpg');
require('./index.html');


var a = async (args) => {
  const { a, b } = args;
  await console.log('hello here', a, b);
  console.log("Done");
}

a({ a: 1, b: 2 });
