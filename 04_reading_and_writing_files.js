var fs      = require('fs');
var path    = require('path');
var Parser  = require('./models/csv_parser.js').Parser;
var people;

function outputJSONFile (file_path, data) {
  fs.writeFile(file_path, data, function (err) {
    if (err) throw err;
    console.log("Wrote to ", file_path)
    return file_path
  });
}

fs.readFile(path.join(__dirname, 'tmp/in_file.csv'), {encoding: 'utf-8'}, function (err, data) {
  if (err) throw err;
  people = Parser(data);
  outputJSONFile('tmp/out_file.json', JSON.stringify(people, "\n", 2))
});