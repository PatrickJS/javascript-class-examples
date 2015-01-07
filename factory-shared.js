var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
 
// Factory shared
var makePerson = function() {
  var person = {};
  EventEmitter.call(person);
  person.wallet = 0;
  _.extend(person, personMethods)
  return person;
}
var personMethods = {};
_.extend(personMethods, EventEmitter.prototype)
 
personMethods.talk = function() {
  
};
 
var person = makePerson();
person.talk();
