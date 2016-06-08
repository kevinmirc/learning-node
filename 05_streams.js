var fs      = require('fs');
var path    = require('path');
var Parser  = require('./models/csv_parser.js').Parser;

var date = new Date().getMilliseconds()
console.log("Started at:", date, "ms")

var rs = fs.createReadStream(__dirname + '/tmp/big_data.csv', {encoding: 'utf-8'});

var data = '';
var people = [];

rs.on('data', function(chunk) {
  people.push(Parser(chunk));
  console.log("People length: ", people.length);
});

rs.on('end', function () {
  var date = new Date().getMilliseconds()
  console.log("Completed at:", date, "ms")
})