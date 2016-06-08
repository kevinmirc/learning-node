var message = {
  new: function (ops) {
    this.body = ops.body
    return this;
  },
  send: function () {
    console.log(this.body)
  }
};

var msg_ops = {body: "Node is the realness"};
var msg = message.new(msg_ops);
msg.send();

exports.message = message;