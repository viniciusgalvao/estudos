var EventEmitter = require('events').EventEmitter;
var util = require('util');

var MyEvent = function() {
  if (!(this instanceof MyEvent)) return new MyEvent();
  EventEmitter.call(this);
}

util.inherits(MyEvent, EventEmitter);

MyEvent.prototype.speak = function (data) {
  this.emit('speaking', data);
};

module.exports = MyEvent;
