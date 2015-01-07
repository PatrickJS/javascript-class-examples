import 'package:event_emitter/event_emitter.dart';
 
/// Dart pseudo-classical
class Person extends EventEmitter {
  num wallet;
  
  Person() {
    this.wallet = 0;
  }
  void talk() {
  
  }
}
 
var person = new Person();
person.talk();
