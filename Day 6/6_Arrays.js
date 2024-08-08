// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let numArr = [1, 2, 3, 4, 5]
console.log(numArr)

// • Task 2: Access the first and last elements of the array and log them to the console.

console.log(numArr[0], numArr[4])

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

numArr.push(6)
console.log(numArr)

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

numArr.pop()
console.log(numArr)
// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

numArr.shift()
console.log(numArr)

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

numArr.unshift(1)
console.log(numArr)

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

// Original array
let numbers = [1, 2, 3, 4, 5];

// Use the map method to create a new array with doubled values
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

// Log the new array to the console
console.log(doubledNumbers);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

// Original array
let newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array with only even numbers
let evenNumbers = newNums.filter(function(number) {
  return number % 2 === 0;
});

// Log the new array to the console
console.log(evenNumbers);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

// Use the reduce method to calculate the sum of all numbers in the array
let sum = newNums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  // Log the result to the console
  console.log(sum);

// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < newNums.length; i++) {
    console.log(newNums[i]);
  }

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

newNums.forEach(function(number) {
    console.log(number);
  });

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Create a two-dimensional array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Log the entire array to the console
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
    }
    console.log(row);
  }
  

// • Task 13: Access and log a specific element from the two-dimensional array.

let specificElement = matrix[1][2]; // Note that indexing starts from 0
console.log(specificElement);