/*
let welcomeEL = document.getElementById("welcome-el")

let name = "Terrence"
let greeting = "How are you doing?"

// Rendering the welcome message using welcomeEL.innertext
welcomeEL.innerText = greeting + name

welcomeEL.innerText = welcomeEL.innerText + " 😀" // longer version
welcomeEL.innerText += " 😀" // shorter version
*/
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
function sayHello() {
    console.log(greeting + ", " + name + "!")
}
sayHello()