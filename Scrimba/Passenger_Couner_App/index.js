// Initialize the count variable
let count = 0;

// Get the element by its ID
let countEL = document.getElementById("count-el");
console.log(countEL);
// Set the initial value of 0
countEL.innerText = count;

// Define the increment function
function increment() {
    count += 1; // Increment the count
    countEL.innerText = count; // Update the displayed count
}
// Creating a function save()

function save() {
    console.log(count)
}

save()

let username = 'person'

let message = "You have three new notifications"
console.log(message + username)