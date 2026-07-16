/*
    Applied Lab 3-2
    Ducky World JavaScript
*/

/*
    Displays a welcome message.
*/
function welcomeCustomer() {
    alert("Welcome to Ducky World!");
}

/*
    Prompts the user for their name and displays a greeting.
*/
function greetCustomer() {
    var customerName = prompt("What is your name?");

    alert("Hello, " + customerName + "!");
}

/*
    Calculates and displays the total number of ducks ordered.
*/
function calculateTotalDucks() {
    var yellowQuantity =
        Number(document.getElementById("yellow").value) || 0;

    var pinkQuantity =
        Number(document.getElementById("pink").value) || 0;

    var blueQuantity =
        Number(document.getElementById("blue").value) || 0;

    var astroQuantity =
        Number(document.getElementById("astro").value) || 0;

    var totalDucks =
        yellowQuantity +
        pinkQuantity +
        blueQuantity +
        astroQuantity;

    alert("Total ducks ordered: " + totalDucks);
}

/*
    Validates the order before submitting the form.
    Return true to allow submission.
    Return false to prevent submission.
*/
function validateOrder() {
    var yellowQuantity =
        Number(document.getElementById("yellow").value) || 0;

    var pinkQuantity =
        Number(document.getElementById("pink").value) || 0;

    var blueQuantity =
        Number(document.getElementById("blue").value) || 0;

    var astroQuantity =
        Number(document.getElementById("astro").value) || 0;

    var totalDucks =
        yellowQuantity +
        pinkQuantity +
        blueQuantity +
        astroQuantity;

    if (totalDucks === 0) {
        alert("Please select at least one duck.");
        return false;
    }

    return confirm("Are you sure you want to place this order?");
}