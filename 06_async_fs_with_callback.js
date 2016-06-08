var fs = require('fs');
var myNumber = undefined;

function addOne (callback) {
  fs.readFile('./tmp/number.txt', function (err, contents) {
    myNumber = parseInt(contents);
    myNumber++
    callback();
  });
}

function logNumber () {
  console.log(myNumber);
}

addOne(logNumber);