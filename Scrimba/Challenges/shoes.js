// When th user clicks the purchase button, reder out
// "Something went wrong, please try again" in the paragraph
// that has the id="error"

let errorParagraph = document.getElementById("error");
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again";
}