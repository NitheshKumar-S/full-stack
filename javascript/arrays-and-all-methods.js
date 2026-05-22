const nums = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie", "Diana"];
const students = [
    { name: "Arjun", score: 85, passed: true },
    { name: "Priya", score: 92, passed: true },
    { name: "Rahul", score: 45, passed: false },
    { name: "Sneha", score: 78, passed: true },
];

// ---- ITERATION ----
// forEach — loop through, no return value
nums.forEach(num => console.log(num));

// ---- TRANSFORMATION ----
// map — transform each element, returns NEW array
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ["ALICE", "BOB", ...]

// ---- FILTERING ----
// filter — keep elements that pass test, returns NEW array
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // [2, 4]

const passedStudents = students.filter(s => s.passed);
console.log(passedStudents); // Arjun, Priya, Sneha

// ---- REDUCTION ----
// reduce — combine all elements into single value
const total = nums.reduce((acc, num) => acc + num, 0);
console.log(total); // 15

const totalScore = students.reduce((acc, s) => acc + s.score, 0);
const avgScore = totalScore / students.length;
console.log(avgScore); // 75

// ---- FINDING ----
// find — returns FIRST element that passes test
const topStudent = students.find(s => s.score > 90);
console.log(topStudent.name); // Priya

// findIndex — returns INDEX of first match
const idx = students.findIndex(s => s.name === "Rahul");
console.log(idx); // 2

// some — returns true if ANY element passes
const anyFailed = students.some(s => !s.passed);
console.log(anyFailed); // true

// every — returns true if ALL elements pass
const allPassed = students.every(s => s.passed);
console.log(allPassed); // false

// includes — check if value exists
console.log(nums.includes(3));    // true
console.log(nums.includes(10));   // false

// ---- SORTING ----
const scores = [85, 92, 45, 78];
scores.sort((a, b) => a - b);  // ascending
console.log(scores); // [45, 78, 85, 92]

scores.sort((a, b) => b - a);  // descending
console.log(scores); // [92, 85, 78, 45]

// ---- CHAINING — most powerful pattern ----
// Get names of passed students sorted by score descending
const result = students
    .filter(s => s.passed)
    .sort((a, b) => b.score - a.score)
    .map(s => `${s.name}: ${s.score}`);
    
console.log(result);
// ["Priya: 92", "Arjun: 85", "Sneha: 78"]

// ---- SPREADING AND DESTRUCTURING ----
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const copy = [...arr1]; // creates new array (not reference)

// Destructuring
const [first, second, ...rest] = nums;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// ---- ARRAY MANIPULATION ----
const fruits = ["apple", "banana", "cherry"];

fruits.push("date");       // add to end
fruits.unshift("avocado"); // add to start
fruits.pop();              // remove from end
fruits.shift();            // remove from start

// splice — add/remove at specific index
fruits.splice(1, 0, "blueberry"); // insert at index 1
fruits.splice(1, 1);              // remove 1 element at index 1

// slice — extract portion (does not modify original)
const sliced = fruits.slice(0, 2); // first 2 elements