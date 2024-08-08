// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// const name = 'Alice';
// const age = 30;

// const message = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(message);


// • Task 2: Create a multi-line string using template literals and log it to the console.
// const multiLineString = `This is a multi-line string.
// You can write text on multiple lines
// without using any special characters.`;

// console.log(multiLineString);

// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// const numbers = [10, 20, 30, 40, 50];

// // Using array destructuring to extract the first and second elements
// const [first, second] = numbers;

// console.log(first);  // Output: 10
// console.log(second); // Output: 20


// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

// const book = {
//     title: "Naruto",
//     author: "Kishimoto"
// };

// // Using object destructuring to extract title and author
// const { title, author } = book;

// console.log(title);  // Output: Naruto
// console.log(author); // Output: Kishimoto



// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to console

// Existing array
// const existingArray = [1, 2, 3];

// // Create a new array using the spread operator and additional elements
// const newArray = [...existingArray, 4, 5, 6];

// // Log the new array to the console
// console.log(newArray);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// // Example usage:
// const result = sum(1, 2, 3, 4, 5);
// console.log(result); // Output: 15


// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

// function multiply(a, b = 1) {
//     return a * b;
// }

// // Example usage:
// console.log(multiply(5, 3)); // Output: 15
// console.log(multiply(7));    // Output: 7


// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// const name = "John Doe";
// const age = 30;

// const person = {
//     // Property shorthand
//     name,
//     age,

//     // Method definition shorthand
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     },

//     // Computed property name
//     ['isAdult']() {
//         return this.age >= 18;
//     }
// };

// // Log the object to the console
// console.log(person);

// // Call the methods
// person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
// console.log(person.isAdult()); // Output: true


// • Task 9: Create an object with computed property names based on variables and log the object to the console.

// Define the variables
// const propName1 = "firstName";
// const propName2 = "lastName";
// const propName3 = "age";

// // Create the object with computed property names
// const person = {
//     [propName1]: "John",
//     [propName2]: "Doe",
//     [propName3]: 30
// };

// // Log the object to the console
// console.log(person);


// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line

// Define variables
const name = "Alice";
const aged = 28;
const city = "Wonderland";

// Create a string using template literals
const introduction = `Hello, my name is ${name}.
I am ${aged} years old and I live in ${city}.`;

// Log the string to the console
console.log(introduction);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log(first, second, fourth); // Output: 1 2 4

// Object destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
const { firstName, age } = person;
console.log(firstName, age); // Output: John 30



// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

// Spread operator to combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Rest operator to handle multiple function arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

// Function with default parameters
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

// Call the function with different arguments
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!


// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

const propName = "dynamicProperty";

const enhancedObject = {
    // Method definition
    greet() {
        console.log("Hello, world!");
    },
    // Computed property name
    [propName]: "This is a dynamic property"
};

// Log the object and call the method
console.log(enhancedObject);
enhancedObject.greet();
