var EventEmitter = require('events').EventEmitter;
 
// ES5 Pseudo-classical
function Person() {
  EventEmitter.call(this);
  this.wallet = 0;
}
Person.prototype = Object.create(EventEmitter.prototype);
Person.constructor = Person;
 
Person.prototype.talk = function() {
  
};
 
var person = new Person();
person.talk();
