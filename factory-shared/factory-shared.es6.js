import { EventEmitter } from 'events');
 
// Factory shared
var makePerson = function() {
  let person = {};
  EventEmitter.call(person);
  person.wallet = 0;
  Object.assign(person, personMethods)
  return person;
}
let personMethods = {};
Object.assign(personMethods, EventEmitter.prototype)
 
personMethods.talk = function() {
  
};
 
let person = makePerson();
person.talk();
