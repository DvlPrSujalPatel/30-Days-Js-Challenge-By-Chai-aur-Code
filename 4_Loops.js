// Activity 1: For Loop

// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <=10 ; i++) {
    // console.log(i)
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <=10; i++) {
    // console.log(5 * i)
}

// Activity 2: While Loop

// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0

let myNumber = 1

while (myNumber <= 10){
    sum+= myNumber
    myNumber++;
}

console.log(`The Sum of myNumber 1 to 10 is : ${sum}` )

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let a = 10

while (a >= 1) {
    console.log(a)
    a--
}

// Activity 3: Do...While Loop

// • Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.

// let result = ''

// let i = 0;

// do {
//     i = i + 1
//     result = result + i
// } while (i < 5);
// console.log(result)

// Initialize the variable
let myNum = 1;

// Use do...while loop to print numbers from 1 to 5
do {
    console.log(myNum);
    myNum++;
} while (myNum <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do... while loop.

// Function to calculate factorial
function factorial(n) {
    let result = 1;
    let i = 1;

    // Use do...while loop to calculate factorial
    do {
        result *= i;
        i++;
    } while (i <= n);

    return result;
}

// Example usage
const number = 5; // You can change this number to calculate the factorial of any other number
console.log(`The factorial of ${number} is:`, factorial(number));

// Activity 4: Nested Loops

// • Task 7: Write a program to print a pattern using nested for loops:
// * 
// **
// ***
// ****
// *****

// Function to print the pattern
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example usage
const numberOfRows = 5; // You can change this to print more or fewer rows
printPattern(numberOfRows);

// Activity 5: Loop Control Statements

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

// Use a for loop to print numbers from 1 to 10
for (let number = 1; number <= 10; number++) {
    // Skip the number 5
    if (number === 5) {
        continue;
    }
    console.log(number);
}



// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

// Use a for loop to print numbers from 1 to 10
for (let number = 1; number <= 10; number++) {
    // Stop the loop when the number is 7
    if (number === 7) {
        break;
    }
    console.log(number);
}



