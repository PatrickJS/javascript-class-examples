import { EventEmitter } from 'events';

// ES6 Prototypal
function Person() {
  let person = Object.create(Person.prototype);
  EventEmitter.call(person)
  person.wallet = 0;
  return person;  
}

Object.setPrototypeOf(Person, EventEmitter.prototype);
 
Person.prototype.talk = function() {
  
};

let person = Person();
person.talk();
