function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe')
john.greet();

var jane = new Person('Jane', 'Doe')
jane.greet();

console.log(john._proto_);
console.log(jane._proto_);
console.log(john._proto_ === jane._proto_);
