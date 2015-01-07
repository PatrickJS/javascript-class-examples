import { EventEmitter } from 'events';
 
// ES6 pseudo-classical
class Person extends EventEmitter {
  constructor() {
    super();
    this.wallet = 0;
  }
  talk() {
    
  }
}
 
let person = new Person();
person.talk();
