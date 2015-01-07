var EventEmitter = require('events').EventEmitter;
 
// Prototypal
function Person() {
  var person = Object.create(Person.prototype);
  EventEmitter.call(person);
  person.wallet = 0;
  return person;
}
Person.prototype = Object.create(EventEmitter.prototype);
 
Person.prototype.talk = function() {
  
};
 
var person = Person();
person.talk();
