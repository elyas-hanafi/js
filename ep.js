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

// ===============================
// 📘 JavaScript Asynchronous Programming - Full Guide
// ===============================

// ===============================
// 📍 1. Introduction to Asynchronous JavaScript
// ===============================
// JavaScript is single-threaded, meaning only one task can be executed at a time.
// Async code helps us run tasks (e.g., network requests, timers) without blocking the main thread.

// ===============================
// 🧠 2. Callback Functions (The Old Way)
// ===============================

function fetchDataCallback(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchDataCallback((result) => {
  console.log("Callback Result:", result);
});

// 🔴 Problem: Callback Hell (Nested callbacks make code hard to read/maintain)

// ===============================
// 💎 3. Promises (Better Than Callbacks)
// ===============================

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: "Jane", age: 25 });
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((result) => {
    console.log("Promise Result:", result);
  })
  .catch((error) => {
    console.error("Promise Error:", error);
  });

// ===============================
// ⚡ 4. Async / Await (Modern and Clean)
// ===============================

async function getDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Async/Await Result:", data);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

getDataAsync();

// ===============================
// 🛠️ 5. Error Handling in Async Code
// ===============================

async function getUserData() {
  try {
    const user = await fetchDataPromise();
    console.log("User fetched:", user);
  } catch (err) {
    // Proper error handling
    console.error("Something went wrong:", err);
  }
}

// ===============================
// 🚀 6. Chaining Promises
// ===============================

function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

step1()
  .then((res) => {
    console.log(res);
    return step2();
  })
  .then((res) => {
    console.log(res);
  });

// ===============================
// 🧵 7. Parallel Async: Promise.all()
// ===============================

function fetchA() {
  return new Promise((res) => setTimeout(() => res("A done"), 1000));
}

function fetchB() {
  return new Promise((res) => setTimeout(() => res("B done"), 2000));
}

async function fetchAll() {
  const results = await Promise.all([fetchA(), fetchB()]);
  console.log("All results:", results); // ["A done", "B done"]
}

fetchAll();

// ===============================
// 🧲 8. Promise.race, .allSettled, .any
// ===============================

const fast = new Promise((res) => setTimeout(() => res("Fast!"), 500));
const slow = new Promise((res) => setTimeout(() => res("Slow..."), 2000));

Promise.race([fast, slow]).then((first) => {
  console.log("First to finish:", first); // Fast!
});

Promise.allSettled([fast, slow]).then((results) => {
  console.log("All settled:", results);
});

Promise.any([
  Promise.reject("Fail 1"),
  Promise.reject("Fail 2"),
  Promise.resolve("Only this one works"),
]).then((result) => {
  console.log("First success:", result);
});

// ===============================
// 🔄 9. Async Iterators and for-await-of
// ===============================

async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield new Promise((res) => setTimeout(() => res(i++), 1000));
  }
}

(async () => {
  for await (let num of asyncGenerator()) {
    console.log("Generated:", num);
  }
})();

// ===============================
// ✅ 10. Real-world Example: Fetching API data
// ===============================

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) throw new Error("HTTP Error!");
    const user = await response.json();
    console.log("Fetched user from API:", user);
  } catch (err) {
    console.error("API Fetch Error:", err);
  }
}

fetchUser();

// ===============================
// 📚 Summary
// ===============================
// ✔ Callbacks are the old method, but lead to nested code
// ✔ Promises provide cleaner handling
// ✔ Async/await syntax is modern and readable
// ✔ Use Promise.all for parallel async
// ✔ Use async iterators for streaming async data
// ✔ Always handle errors in async functions

// 🔚 End of File

// ===============================
// 📘 JavaScript Loops - Full Guide
// ===============================

// ===============================
// 📍 1. Why Use Loops?
// ===============================
// Loops let you repeat a block of code multiple times.
// They’re useful for processing arrays, repeating logic, and iterating over data.

// ===============================
// 🔁 2. for Loop
// ===============================

for (let i = 0; i < 5; i++) {
  console.log("for loop iteration:", i);
}

// Explanation:
// - i = 0 → starting point
// - i < 5 → condition to keep looping
// - i++ → increment by 1 each loop

// ===============================
// ♻ 3. while Loop
// ===============================

let count = 0;

while (count < 3) {
  console.log("while loop count:", count);
  count++;
}

// Explanation:
// while loops run as long as the condition is true

// ===============================
// 🔄 4. do...while Loop
// ===============================

let num = 0;

do {
  console.log("do...while number:", num);
  num++;
} while (num < 2);

// Explanation:
// do...while runs the block at least once even if the condition is false at the start

// ===============================
// 📦 5. for...of Loop (for Arrays and Strings)
// ===============================

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log("for...of fruit:", fruit);
}

// Also works with strings:
for (const letter of "Hi") {
  console.log("Letter:", letter);
}

// ===============================
// 🗂 6. for...in Loop (for Objects)
// ===============================

const user = {
  name: "Alice",
  age: 25,
  country: "USA",
};

for (const key in user) {
  console.log(`Key: ${key}, Value: ${user[key]}`);
}

// Note: Use for...in only for objects (not arrays)

// ===============================
// 💥 7. break and continue
// ===============================

for (let i = 0; i < 5; i++) {
  if (i === 3) break; // exit the loop completely
  console.log("break example:", i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip this iteration
  console.log("continue example:", i);
}

// ===============================
// 🔁 8. Looping Through Arrays with Higher-Order Functions
// ===============================

const numbers = [1, 2, 3, 4];

// forEach - runs a function for each element
numbers.forEach((num) => {
  console.log("forEach number:", num);
});

// map - returns a new array
const doubled = numbers.map((n) => n * 2);
console.log("Mapped (doubled) array:", doubled);

// filter - returns elements that match a condition
const even = numbers.filter((n) => n % 2 === 0);
console.log("Filtered (even) array:", even);

// reduce - reduces the array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduced sum:", sum);

// ===============================
// 🔄 9. Nested Loops
// ===============================

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// ===============================
// 📚 Summary
// ===============================
// ✅ Use for, while, and do...while for general looping
// ✅ Use for...of for arrays and strings
// ✅ Use for...in for objects
// ✅ Use break to exit loops early
// ✅ Use continue to skip an iteration
// ✅ Use array methods like map, filter, and reduce for powerful iteration

// 🔚 End of Loops Tutorial

// =============================================================
// 📘 JavaScript Under the Hood – From Basics to Advanced Internals
// =============================================================

// ===============================
// 📍 1. What Happens When You Run JS?
// ===============================
// 1. Your JS source file (*.js) is loaded (e.g. via <script> or import).
// 2. The engine reads your UTF-16 text and breaks it into tokens.
// 3. Tokens form an Abstract Syntax Tree (AST) representing code structure.
// 4. The engine converts the AST into bytecode for a baseline interpreter.
// 5. Hot (frequently-run) code paths get compiled into optimized machine code.
// 6. At runtime, everything executes on a single main thread, but async I/O
//    and timers run in the background and feed results back via the event loop.

// ===============================
// 🔁 2. The Call Stack & Execution Contexts
// ===============================
// – **Call Stack**: a LIFO stack of execution contexts.
// – **Global Execution Context**: created first, holds top-level variables/functions.
// – **Function Execution Context**: created on each function call, with its own:
//     • Variable Environment (variables & parameters)
//     • Scope Chain (for lexical lookup)
//     • `this` binding

function foo(x) {
  // new Execution Context for foo
  console.log("in foo, x =", x);
}

console.log("start"); // global context
foo(42);
console.log("end");

// ===============================
// 📦 3. Memory Heap & Garbage Collection
// ===============================
// – **Heap**: unstructured memory region for objects, closures, arrays, etc.
// – **Garbage Collector**: periodically marks reachable objects and sweeps away unused ones.
// – Engines often use generational & incremental mark-and-sweep to minimize pauses.

function makeUser(name) {
  return { name };
}

let user = makeUser("Alice");
// later…
user = null; // object becomes unreachable → eligible for GC

// ===============================
// 🕒 4. Asynchronous I/O & the Event Loop
// ===============================
// – JS itself is single-threaded & synchronous.
// – Browser (or Node.js) provides Web APIs / libuv thread pool for timers, I/O, network.
// – Completed tasks queue their callbacks in the **macrotask** or **microtask** queues.
// – The **Event Loop**: when the call stack is empty, it takes the next callback off
//   the microtask queue (Promises, MutationObservers), then one macrotask
//   (setTimeout, I/O, UI events), and pushes it onto the call stack.

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// Output order: A → D → C → B

// ===============================
// 💎 5. Hidden Classes & Inline Caches (V8 Internals)
// ===============================
// – When you create an object, V8 assigns it a **hidden class** based on its shape.
// – Adding/removing properties transitions it to new hidden classes.
// – **Inline Caches** record where properties live for each hidden class.
//   Next time you access the same property on same-shaped object, V8 skips the lookup.

function Point(x, y) {
  this.x = x; // hidden class A
  this.y = y; // hidden class B
}

Point.prototype.dist = function () {
  return Math.hypot(this.x, this.y);
};

const p = new Point(3, 4);
p.dist(); // optimized via inline caching

// ===============================
// ⚡ 6. JIT Compilation Pipeline
// ===============================
// 1. **Parser** → AST → **Bytecode** (baseline interpreter).
// 2. **Profiler** watches executions to find “hot” functions/loops.
// 3. **Optimizing Compiler** (e.g. TurboFan) generates fast native code.
// 4. **Deoptimizer** reverts to bytecode if runtime assumptions break.

function compute(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.sin(i);
  }
  return total;
}

console.log(compute(1e6));

// ===============================
// 🔄 7. Advanced Garbage Collection
// ===============================
// – **Generational GC**: new objects (young generation) collected more often.
// – **Incremental GC**: breaks work into small slices to avoid long pauses.
// – **Concurrent GC**: some marking/sweeping can occur in background threads.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new Node(1);
head.next = new Node(2);
// … later
head = null; // both nodes can be collected eventually

// ===============================
// 🔍 8. Async Iterators & Streams
// ===============================
// – Generators (`function*`) produce sync sequences.
// – Async generators (`async function*`) yield Promises, consumable with `for await…of`.

async function* fetchChunks(url) {
  const resp = await fetch(url);
  const reader = resp.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    yield value;
  }
}

(async () => {
  for await (const chunk of fetchChunks("/bigfile")) {
    console.log("Received chunk of size", chunk.length);
  }
})();

// ===============================
// 🚀 9. Summary of the Journey
// ===============================
// 1. **Loading & Parsing:** source → tokens → AST
// 2. **Baseline Execution:** AST → bytecode → call stack
// 3. **JIT Optimization:** detect hot code → compile to machine code → deopt if needed
// 4. **Memory Management:** heap allocations + GC (mark-and-sweep, generational, incremental)
// 5. **Concurrency:** single main thread + event loop + micro/macro task queues
// 6. **Engine Tricks:** hidden classes, inline caches, speculative optimizations

// This end-to-end view—from your typed code down to CPU instructions, through memory,
// threading, and runtime APIs—will help you write more predictable, performant,
// and robust JavaScript in both browsers and Node.js.
// =============================================================

// ================================================
// 🧠 Execution Contexts (EC) in JavaScript – Deep Dive
// ================================================

// 🧾 Definition:
// An **Execution Context** is an abstract environment where JavaScript code is evaluated and executed.
// Every time code runs (global code, a function, or `eval()`), a new Execution Context is created.

// ================================================
// 🧱 Structure of an Execution Context:
// ================================================
// Each EC contains three core components:

/*
1. 🧠 Variable Environment:
   - Stores variable and function declarations.
   - Includes a "Lexical Environment" (used for scoping).
   - Handles `let`, `const`, and `var`.

2. 🔗 Scope Chain:
   - A chain of parent contexts to resolve variables not found in the current context.
   - Lexical: determined by the code structure (where you write it).

3. 🧍‍♂️ `this` Binding:
   - Represents the context object (depends on how the function is called).
*/

// ================================================
// 📌 Types of Execution Contexts
// ================================================

/*
1. 🌍 Global Execution Context (GEC):
   - Created once when the script starts.
   - Binds `this` to the global object (e.g., `window` in browser, `global` in Node).
   - Only one GEC exists.

2. 🔧 Functional Execution Context (FEC):
   - Created every time a function is called.
   - Has its own `arguments` object.
   - Can access variables from its outer environment via the Scope Chain.

3. 🧪 Eval Execution Context:
   - Created when code is executed inside `eval()`.
   - Generally discouraged due to security and performance risks.
*/

// Example: Execution Contexts in action

const globalVar = "I am global";

function outer() {
  const outerVar = "I am outer";

  function inner() {
    const innerVar = "I am inner";
    console.log(globalVar); // Resolved from Global EC
    console.log(outerVar); // Resolved from Outer FEC
    console.log(innerVar); // Resolved from Inner FEC
  }

  inner();
}

outer();

// ===================================================
// 📦 Call Stack and EC Creation
// ===================================================
// – Each EC is pushed onto the Call Stack.
// – When a function returns, its EC is popped off the stack.

// Visual Stack Example:
// 1. Global EC created
// 2. outer() is called → outer FEC pushed
// 3. inner() is called → inner FEC pushed
// 4. inner() finishes → inner FEC popped
// 5. outer() finishes → outer FEC popped

// ===================================================
// 🧙 Hoisting inside Execution Contexts
// ===================================================
// During the **Creation Phase**, before any code runs:
// – `var` declarations are hoisted (undefined)
// – `let` and `const` are hoisted but remain in "Temporal Dead Zone"
// – Function declarations are hoisted entirely (including body)

function testHoist() {
  console.log(a); // undefined (var is hoisted)
  var a = 10;

  // console.log(b); // ❌ ReferenceError
  let b = 20;
}

// ===================================================
// 🧭 Lexical vs Dynamic Scope
// ===================================================
/*
– JavaScript is **lexically scoped**: scope is determined by the location in code, not call site.
– That means function ECs remember the environment in which they were defined, not where they were called.
*/

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter(); // New closure created
console.log(counter()); // 1
console.log(counter()); // 2

// Execution Context of returned function retains access to `count` even after outer EC is gone.

// ===================================================
// ⛔ Common Pitfall: Losing `this` in EC
// ===================================================

const person = {
  name: "Alice",
  greet() {
    console.log("Hi, I'm", this.name);
  },
};

const greetFn = person.greet;
greetFn(); // ❌ undefined (this refers to global object)

person.greet(); // ✅ "Hi, I'm Alice"

// Why? Because `this` is not lexically bound—it’s set by how a function is **called**, not where it’s defined.

// ===================================================
// 📌 Summary
// ===================================================
// ✅ Every time JS runs, it creates an Execution Context (Global, Function, Eval)
// ✅ Each EC has Variable Environment, Scope Chain, and `this`
// ✅ Execution Contexts are pushed to and popped from the Call Stack
// ✅ Lexical scoping defines how variable lookup works (not dynamic)
// ✅ Closures retain outer ECs even after return
// ✅ Hoisting behavior differs by var/let/const
// ✅ `this` is determined by the call site, not by lexical scope

// This concept is the foundation of everything else in JavaScript – scoping, closures, async flow,
// memory management, and even how errors are handled all depend on the mechanics of Execution Contexts.
