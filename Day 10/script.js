// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const changeBtn = document.querySelector(".changing-btn")
const changablePara = document.querySelector(".changable-para")

changeBtn.addEventListener("click", function(){
    changablePara.textContent = "Button is clicked";
})

// • Task 2: Add a double-click event listener to an image that toggles its visibility.

// Select the image element
const myImage = document.getElementById('myImage');

// Add double-click event listener to the image
myImage.addEventListener('dblclick', function() {
    // Toggle the visibility of the image
    if (myImage.style.display === 'none') {
        myImage.style.display = 'block';
    } else {
        myImage.style.display = 'none';
    }
});


// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.

const bgchanger = document.querySelector(".bgchanger");

bgchanger.addEventListener("mouseover", function() {
    bgchanger.style.backgroundColor = "red";
});


// • Task 4: Add a mouseout event listener to an element that resets its background color.

bgchanger.addEventListener("mouseout", function() {
    bgchanger.style.backgroundColor = "#212121";
});


// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

// Select the input field element
const inputField = document.getElementById('inputField');

// Add keydown event listener to the input field
inputField.addEventListener('keydown', function(event) {
    // Log the key pressed to the console
    console.log(`Key pressed: ${event.key}`);
});



// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
// Select the input field and paragraph elements
const inputField2 = document.getElementById('inputField2');
const outputParagraph = document.getElementById('outputParagraph');

// Add keyup event listener to the input field
inputField2.addEventListener('keyup', function() {
    // Update the paragraph's text content with the current value of the input field
    outputParagraph.textContent = inputField2.value;
});



// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
// Select the form element
const form = document.getElementById('myForm');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Log the form data to the console
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});



// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
 // Get the select element and the paragraph element
 const selectElement = document.getElementById('mySelect');
 const displayParagraph = document.getElementById('displayParagraph');

 // Add a change event listener to the select element
 selectElement.addEventListener('change', function() {
     // Get the selected value
     const selectedValue = selectElement.value;

     // Display the selected value in the paragraph
     displayParagraph.textContent = `Selected value: ${selectedValue}`;
 });


// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

// Select the parent element (the list)
const list = document.getElementById('myList');
    
// Add a click event listener to the parent element
list.addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target && event.target.nodeName === 'LI') {
        // Log the text content of the clicked list item
        console.log(event.target.textContent);
    }
});


// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.