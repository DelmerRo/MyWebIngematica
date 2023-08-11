document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Form submitted successfully!");
        contactForm.reset();
    });
});
