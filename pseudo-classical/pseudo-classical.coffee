{EventEmitter} = require 'events'
 
# Coffeescript pseudo-classical
class Person extends EventEmitter
  constructor: ->
    super()
    @wallet = 0
  talk: ->
 
person = new Person()
person.talk()
