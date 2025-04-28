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
