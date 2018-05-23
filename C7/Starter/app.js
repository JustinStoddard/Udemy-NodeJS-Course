// Your Javascript Code Goes Here


//Function Statment
function greet() {
  console.log('hi');
}
greet();

//functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

//function expression
var greetMe = function() {
  console.log('Hi Justin');
}
greetMe();

//Its first class
logGreeting(greetMe);

//Use a function expression on the fly
logGreeting(function() {
  console.log('Hello Justin');
})

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.