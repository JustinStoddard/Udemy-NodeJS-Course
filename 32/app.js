// object properties
var obj = {
  greet: hello
}
console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

//Function & Arrays
var arr = [];

arr.push(function() {
  console.log('Hello World 1');
});
arr.push(function() {
  console.log('Hello World 2');
});
arr.push(function() {
  console.log('Hello World 2');
});

arr.forEach(function(item) {
  item();
});