// Get elements from HTML

const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

const contactButton = document.getElementById("contactButton");
const contactMessage = document.getElementById("contactMessage");


// First Button Interaction

messageButton.addEventListener("click", function () {

    message.textContent =
        "Hello! Thank you for visiting my webpage.";

});


// Contact Button Interaction

contactButton.addEventListener("click", function () {

    contactMessage.textContent =
        "Thank you for your interest! You can contact me through email.";

});