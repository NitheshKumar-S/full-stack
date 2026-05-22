// Object creation
const person = {
    firstName: "Arjun",
    lastName: "Sharma",
    age: 21,
    city: "Chennai",
    skills: ["JavaScript", "Python", "SQL"],
    address: {
        street: "100 MG Road",
        pincode: "600001"
    },
    // Method — function inside object
    greet: function() {
        return `Hi, I'm ${this.firstName}`;
    },
    // Arrow function shorthand method
    getFullName: () => `${person.firstName} ${person.lastName}`
};

// Accessing properties
console.log(person.firstName);           // dot notation
console.log(person["lastName"]);         // bracket notation
console.log(person.address.pincode);     // nested access
console.log(person.skills[0]);           // array in object

// Calling methods
console.log(person.greet());

// Adding and modifying
person.email = "arjun@email.com";    // add new property
person.age = 22;                      // modify existing

// Deleting
delete person.city;

// Checking if property exists
console.log("email" in person);           // true
console.log(person.hasOwnProperty("age")); // true

// ---- DESTRUCTURING ----
const { firstName, age, city = "Unknown" } = person;
// city = "Unknown" is default value (since we deleted city)
console.log(firstName); // Arjun
console.log(age);       // 22
console.log(city);      // Unknown

// Rename while destructuring
const { firstName: fName, lastName: lName } = person;
console.log(fName); // Arjun

// ---- SPREAD OPERATOR ----
const updated = { ...person, age: 23, role: "Developer" };
// Creates new object with all person properties
// Overrides age, adds role

// ---- OBJECT METHODS ----
console.log(Object.keys(person));    // array of keys
console.log(Object.values(person));  // array of values
console.log(Object.entries(person)); // array of [key, value] pairs

// Convert entries back to object
const newObj = Object.fromEntries(
    Object.entries(person).filter(([key]) => key !== "address")
);

// ---- OPTIONAL CHAINING ----
// Safe access to nested properties that might not exist
console.log(person?.address?.street);    // safe
console.log(person?.phone?.number);      // undefined (no error)

// ---- NULLISH COALESCING ----
const phone = person.phone ?? "No phone";
console.log(phone); // "No phone"