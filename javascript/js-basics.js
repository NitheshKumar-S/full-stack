// Three ways to declare variables
var name = "Old way";      // avoid — has weird scoping issues
let age = 21;              // use for values that change
const city = "Chennai";    // use for values that never change

// Key rules
// let and const are block-scoped
// var is function-scoped (causes bugs)
// Always prefer const, use let when needed, avoid var

// Data types
const text = "Hello";           // String
const num = 42;                 // Number
const decimal = 3.14;           // Number (no float type)
const isTrue = true;            // Boolean
const nothing = null;           // Null (intentionally empty)
let notDefined;                 // Undefined (declared but no value)

// typeof operator
console.log(typeof text);       // "string"
console.log(typeof num);        // "number"
console.log(typeof isTrue);     // "boolean"
console.log(typeof nothing);    // "object" (known JS quirk)
console.log(typeof notDefined); // "undefined"

// String + Number = String (type coercion)
console.log("5" + 3);    // "53" (concatenation)
console.log("5" - 3);    // 2   (subtraction forces number)
console.log("5" * 3);    // 15  (multiplication forces number)

// Strict equality — always use === not ==
console.log(5 == "5");   // true  (== converts types)
console.log(5 === "5");  // false (=== checks type too)
// Rule: Always use === in your code   


