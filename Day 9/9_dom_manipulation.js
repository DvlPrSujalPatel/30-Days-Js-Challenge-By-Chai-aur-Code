// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.

document.getElementById("header").textContent = "Hello World"

// • Task 2: Select an HTML element by its class and change its background color.

document.querySelector('.bg').style.backgroundColor = "red"

// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.

// Create a new div element
const newDiv = document.createElement('div');

// Add text content to the div
newDiv.textContent = 'This is the text content of the new div element.';

// Append the div to the body of the document
document.body.appendChild(newDiv);


// • Task 4: Create a new li element and add it to an existing ul list.

document.querySelector("ul").innerHTML = "<li>Firsrt</li>"

// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.

document.querySelector("h3").remove()

// • Task 6: Remove the last child of a specific HTML element.

// Select the specific HTML element by its class name
const parentElement = document.querySelector('.removeChild');

// Check if the element has any children
if (parentElement.lastChild) {
    // Remove the last child of the selected element
    parentElement.removeChild(parentElement.lastChild);
}


// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

// Select the img element
const imgElement = document.getElementById('myImage');
    
// Change the src attribute
imgElement.setAttribute('src', 'https://c8.alamy.com/comp/2AMG5E0/cristiano-ronaldo-of-juventus-reacts-during-the-italian-championship-serie-a-football-match-between-as-roma-and-juventus-on-january-12-2020-at-stadio-olimpico-in-rome-italy-photo-federico-proiettiespa-imaes-2AMG5E0.jpg');

imgElement.style.width = "200px"


// • Task 8: Add and remove a CSS class to/from an HTML element.



const toggle = document.getElementById("toggle")

const changeBtn = document.getElementById("change")

changeBtn.addEventListener("click", function(){
    toggle.classList.toggle("hidden")
    if(toggle.classList.contains("hidden")){
        changeBtn.textContent = "Bapas laao"
    }else{
        changeBtn.textContent = "Hatao ise"
    }
})

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const changablePara = document.querySelector("#changablePara")
const paraChange = document.querySelector("#paraChange")

paraChange.addEventListener("click", function(){
    changablePara.textContent = "This is the text content of the paragraph."
})


// • Task 10: Add a mouseover event listener to an element that changes its border color.


const box = document.querySelector("#box")
box.addEventListener("mouseover", function(){
    box.style.border = "thick solid #0000FF"
})
box.addEventListener("mouseout", function(){
    box.style.border = "none"
})

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.