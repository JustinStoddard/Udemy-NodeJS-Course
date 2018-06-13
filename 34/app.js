var Emitter = require('events');
var eventConfig = require('./config').events; 

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('Some Where, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A Greeting Occured');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);