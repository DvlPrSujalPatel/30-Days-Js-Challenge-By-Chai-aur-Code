// // Activity 1: Object Creation and Access
// // • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

// let myBook = {
//     title: "Naruto",
//     author: "Kishimoto",
//     year: 2001
// }
// console.log(myBook)

// // • Task 2: Access and log the title and author properties of the book object.

// console.log(myBook.title, myBook.author)

// // Activity 2: Object Methods
// // • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// // Define the Book object
// function Book(title, author) {
//     this.title = title;
//     this.author = author;
// }

// // Add a method to the Book prototype
// Book.prototype.getDetails = function() {
//     return `Title: ${this.title}, Author: ${this.author}`;
// }

// // Create a new Book instance
// const newBook = new Book('To Kill a Mockingbird', 'Harper Lee');

// // Log the result of calling the getDetails method
// console.log(newBook.getDetails());


// // • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
// // Define the Book object
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
  
//     // Method to update the year property
//     updateYear: function(newYear) {
//       this.year = newYear;
//       console.log(this);
//     }
//   };
  
//   // Update the year and log the updated book object
// book.updateYear(2024);
  

// // Activity 3: Nested Objects
// // • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// // Define the Library object
// let library = {
//     name: "City Library",
//     books: [
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960
//       },
//       {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949
//       },
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925
//       }
//     ]
//   };
  
//   // Log the library object to the console
//   console.log(library);
  
// // • Task 6: Access and log the name of the library and the titles of all the books in the library.
// console.log('Library Name: ' + library.name)
// console.log("Book Titles:");
// library.books.forEach(book => {
//   console.log(book.title);
// });

// // Activity 4: The this Keyword
// // • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this  method.
// let book2 = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
  
//     // Method to return a string with the book's title and year
//     getTitleAndYear: function() {
//       return `${this.title} (${this.year})`;
//     }
//   };

//   console.log(book2.getTitleAndYear());


// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
// Define the Book object
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
  
//     // Method to return a string with the book's title and year
//     getTitleAndYear: function() {
//       return `${this.title} (${this.year})`;
//     }
//   };
  
//   // Use a for...in loop to iterate over the properties of the book object
//   for (let property in book) {
//     if (book.hasOwnProperty(property)) {
//       console.log(`${property}: ${book[property]}`);
//     }
//   }
  



// • Task 9: Use Object. keys and Object.values methods to log all the keys and values of the book object.

// Define the Book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  
    // Method to return a string with the book's title and year
    getTitleAndYear: function() {
      return `${this.title} (${this.year})`;
    }
  };
  
  // Log all keys of the book object
  console.log("Keys:", Object.keys(book));
  
  // Log all values of the book object
  console.log("Values:", Object.values(book));
  