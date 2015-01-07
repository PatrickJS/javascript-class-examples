import { EventEmitter } from 'events';

// ES6 Prototypal
class Person extends EventEmitter {
  constructor() {
    let person = Object.create(Person.prototype);
    EventEmitter.call(person)
    person.wallet = 0;
    return person;  
  }
  talk() {
  
  }
}

let person = Person();
person.talk();
