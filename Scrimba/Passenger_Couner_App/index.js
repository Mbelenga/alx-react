// Initialize the count variable
let count = 0;

// Get the elements by their IDs
let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// Set the initial value of 0
countEL.textContent = count;

// Define the increment function
function increment() {
    count += 1; // Increment the count
    countEL.textContent = count; // Update the displayed count
}

// Define the save function
function save() {
    let countSTR = count + " - ";
    saveEl.innerText += countSTR; // Append the count to saveEl
}