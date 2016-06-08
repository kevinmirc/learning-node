"use strict";
var Person = require('./person.js').Person;

function createPerson (string) {
  var arr = string.split(",");
  var properties = {firstName: arr[0], lastName: arr[1], email: arr[2], phone: arr[3]}
  return new Person(properties);
}

var Parser = function (content) {
  var arr = content.split("\n");
  arr.shift();
  arr = arr.filter(function(item){return item !== ""})
  var people = arr.map((str) => createPerson(str))
  return people
}

exports.Parser = Parser