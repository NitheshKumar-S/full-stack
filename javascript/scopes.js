// Global scope — accessible everywhere
const globalVar = "I am global";

function outer() {
    // Function scope — accessible inside this function
    const outerVar = "I am in outer";
    
    function inner() {
        // Block scope — accessible inside this block
        const innerVar = "I am in inner";
        
        // Can access all outer scopes
        console.log(globalVar);  // works
        console.log(outerVar);   // works
        console.log(innerVar);   // works
    }
    
    inner();
    // console.log(innerVar); // ERROR — innerVar not accessible here
}

outer();
// console.log(outerVar); // ERROR — outerVar not accessible here

// Block scope with let and const
if (true) {
    let blockLet = "block scoped";
    var blockVar = "function scoped";
    const blockConst = "also block scoped";
}
// console.log(blockLet);   // ERROR
// console.log(blockConst); // ERROR
console.log(blockVar);      // works — var ignores blocks (BAD)

// Closure — inner function remembers outer function's variables
function makeCounter() {
    let count = 0;  // this variable is "closed over"
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
// count variable is private — can't access directly