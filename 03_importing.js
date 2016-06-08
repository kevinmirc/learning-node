var message = require('./exporting.js').message;
var debug = require('debug')
debugger;

var msg_ops = {body: "Hello from another file!"};
var msg = message.new(msg_ops);
console.log(msg.body);