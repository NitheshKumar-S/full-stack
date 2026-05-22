// Way 1: Function Declaration
// Hoisted — can call before definition
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Arjun"));

// Way 2: Function Expression
// Not hoisted — must define before calling
const greetExpr = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetExpr("Priya"));

// Way 3: Arrow Function (most modern, use this mostly)
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

// Arrow function shorthand — single expression
const greetShort = name => `Hello, ${name}!`;
// Parentheses optional for single param
// Curly braces and return optional for single expression

console.log(greetArrow("Rahul"));
console.log(greetShort("Kumar"));

// Way 4: IIFE — Immediately Invoked Function Expression
// Runs immediately, used to avoid polluting global scope
(function() {
    console.log("I run immediately!");
})();

// Default parameters
const greetWithDefault = (name = "friend") => {
    return `Hello, ${name}!`;
};
console.log(greetWithDefault());        // Hello, friend!
console.log(greetWithDefault("Arjun")); // Hello, Arjun!

// Rest parameters — collect remaining args into array
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15

// Higher order functions — functions that take/return functions
const multiply = (factor) => {
    return (number) => number * factor;
};
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15