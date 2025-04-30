// **********************************************************
//           Complete JavaScript Introduction (Advanced)
// **********************************************************

///////////////////////
// 1. JavaScript Introduction (Advanced)
///////////////////////

/*
JavaScript is a powerful, high-level, dynamically typed programming language.
It runs in browsers (client-side) and servers (Node.js).
It supports object-oriented, functional, and event-driven paradigms.
*/

console.log("Welcome to Advanced JavaScript 🚀");

///////////////////////
// 2. Values and Variables (Basic to Advanced)
///////////////////////

// Values: Pieces of data (like strings, numbers, booleans)
// Variables: Containers for storing values

let name = "Jonas";
let age = 30;
const birthYear = 1993;

// Best Practices:
// - Use clear, descriptive names
// - camelCase convention

///////////////////////
// 3. Data Types (Basic to Advanced)
///////////////////////

/*
Primitive Types:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol (ES6)
- BigInt (ES2020)

Reference Types:
- Objects
- Arrays
- Functions
*/

let isProgrammer = true;
let lastName;
console.log(typeof lastName); // undefined

///////////////////////
// 4. var, let, const (Basic to Advanced)
///////////////////////

// var (function-scoped, hoisted)
var job = "teacher";

// let (block-scoped, mutable)
let hobby = "painting";
hobby = "coding";

// const (block-scoped, immutable)
const country = "Germany";
// country = "France"; ❌ Error!

///////////////////////
// 5. Operators (Basic to Advanced)
///////////////////////

// Arithmetic Operators
let sum = 10 + 5; // 15
let product = 10 * 5; // 50

// Assignment Operators
let x = 10;
x += 5; // x = x + 5 => 15

// Comparison Operators
console.log(10 > 5); // true

// Logical Operators
console.log(true && false); // false

///////////////////////
// 6. Strings and Template Literals (Basic to Advanced)
///////////////////////

// Old way:
console.log("I am " + name + ", a " + age + " year old.");

// Template Literals:
console.log(`I am ${name}, a ${age} year old.`);

///////////////////////
// 7. if-else Statements, Switch Case (Basic to Advanced)
///////////////////////

const weather = "rainy";

if (weather === "sunny") {
  console.log("Wear sunglasses 🕶️");
} else if (weather === "rainy") {
  console.log("Bring an umbrella ☂️");
} else {
  console.log("Check the weather forecast 📡");
}

// Switch case:
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  default:
    console.log("Enjoy the day!");
}

///////////////////////
// 8. Type Conversion and Coercion (Basic to Advanced)
///////////////////////

// Conversion (manually changing types)
const inputYear = "1991";
console.log(Number(inputYear) + 18);

// Coercion (automatic type conversion)
console.log("I am " + 23 + " years old"); // 23 coerced to string
console.log("23" - "10" - 3); // Strings converted to numbers

///////////////////////
// 9. Truthy and Falsy Values (Basic to Advanced)
///////////////////////

/*
Falsy Values: 0, '', undefined, null, NaN, false
Everything else is truthy
*/

console.log(Boolean(0)); // false
console.log(Boolean("Jonas")); // true

///////////////////////
// 10. Equality Operators (== vs ===)
///////////////////////

const num = 18;

if (num === 18) console.log("Strict Equality ✅"); // no type coercion
if (num == "18") console.log("Loose Equality ⚠️"); // type coercion

///////////////////////
// 11. Boolean Logic
///////////////////////

// Logical operators: AND (&&), OR (||), NOT (!)
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Person can drive 🚗");
} else {
  console.log("Someone else should drive 🛑");
}

///////////////////////
// 12. Type of All Functions
///////////////////////

// Function Declaration
function calcAge(birthYear) {
  return 2025 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2025 - birthYear;

console.log(calcAge(1995));
console.log(calcAge2(1995));
console.log(calcAge3(1995));

// Functions are special types of objects in JavaScript 🔥

///////////////////////
// 13. Scope in JavaScript (Complete Guide)
///////////////////////

/*
Scope = Environment where variables and functions are accessible.
Three types:
- Global Scope
- Function Scope
- Block Scope
*/

// Global Scope: Available everywhere
const globalVar = "I'm global!";

function displayGlobal() {
  console.log(globalVar); // Accessible here
}
displayGlobal();

// Function Scope: Variables inside a function are only accessible there
function greet() {
  const message = "Hello inside function!";
  console.log(message);
}
greet();
// console.log(message); ❌ Error: message is not defined

// Block Scope (let and const)
{
  let blockVar = "I exist only inside this block";
  const anotherBlockVar = "Me too!";
  console.log(blockVar);
}
// console.log(blockVar); ❌ Error

// var is NOT block scoped
{
  var notBlockScoped = "I leak outside!";
}
console.log(notBlockScoped); // Accessible

// Nested Scope (Scope Chain)
function outerFunction() {
  const outerVar = "Outer";

  function innerFunction() {
    const innerVar = "Inner";
    console.log(outerVar); // Access parent scope
    console.log(innerVar);
  }

  innerFunction();
}
outerFunction();

// Lexical Scope: Functions remember the environment where they were created

///////////////////////
// 14. Strict Mode
///////////////////////

("use strict"); // Activates strict mode in the whole script

// Helps catch common bugs and prevents silent errors
// Example: Using undeclared variables
// x = 3.14; // ❌ ReferenceError in strict mode

function testStrict() {
  // 'use strict'; // Can be used per-function
  let y = 10;
  console.log(y);
}
testStrict();

///////////////////////
// 15. Functions Zero to Hero (Closures, Hoisting, etc.)
///////////////////////

// Hoisting:
hoistedFunction(); // ✅ Works due to hoisting
function hoistedFunction() {
  console.log("Hoisted Function!");
}

// Function Expression is not hoisted:
// unhoisted(); // ❌ Error
const unhoisted = function () {
  console.log("This is a function expression");
};

// Arrow functions are not hoisted
const arrow = () => console.log("Arrow function");

// Arguments Object (available in regular functions only)
function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3);

// Default Parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greetUser();

// Rest Parameters
function sumAll(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumAll(1, 2, 3, 4));

// Callback Functions
function processUserInput(callback) {
  const name = "User";
  callback(name);
}
processUserInput((n) => console.log(`Welcome ${n}`));

// Closures
function outer() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}
const increment = outer();
increment();
increment();

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE runs instantly!");
})();

///////////////////////
// 16. Arrays (Intro)
///////////////////////

const friends = ["Michael", "Steven", "Peter"];
console.log(friends[0]); // Michael

// Arrays can contain any type:
const mixedArray = ["text", 1991, true, null];

///////////////////////
// 17. Array Operators (Zero to Hero)
///////////////////////

const nums = [10, 20, 30];

// Add elements:
nums.push(40); // add to end
nums.unshift(0); // add to beginning

// Remove elements:
nums.pop(); // remove from end
nums.shift(); // remove from beginning

// Index & Includes:
console.log(nums.indexOf(20)); // 1
console.log(nums.includes(30)); // true

// Map, Filter, Reduce
const doubled = nums.map((n) => n * 2);
const filtered = nums.filter((n) => n > 10);
const reduced = nums.reduce((acc, val) => acc + val, 0);
console.log(doubled, filtered, reduced);

///////////////////////
// 18. Objects (Basics)
///////////////////////

const person = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 30,
  job: "teacher",
};

///////////////////////
// 19. Dot and Bracket Notation
///////////////////////

console.log(person.firstName); // Jonas
console.log(person["lastName"]); // Schmedtmann

const key = "job";
console.log(person[key]); // teacher

///////////////////////
// 20. Object Methods
///////////////////////

const student = {
  firstName: "Sarah",
  birthYear: 2000,
  calcAge: function () {
    return 2025 - this.birthYear;
  },
  greet: function () {
    console.log(`Hi, I'm ${this.firstName}`);
  },
};

console.log(student.calcAge()); // 25
student.greet();
