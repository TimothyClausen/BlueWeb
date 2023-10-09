document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const registrationMessage = document.getElementById('registrationMessage');
    const loginMessage = document.getElementById('loginMessage');

    // Registration form submission
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const 

        // Send registration data to the server (replace with your backend logic)
        // You can use fetch or other methods to send data to your server
        // Display a success or error message based on the server response
        registrationMessage.innerText = 'Registration successful!';

        // Redirect to the login page after successful registration
        setTimeout(function () {
            window.location.href = 'login.html';
        }, 2000); // Redirect after 2 seconds (adjust the delay as needed)
    });

    // Login form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Send login data to the server (replace with your backend logic)
        // You can use fetch or other methods to send data to your server
        // Display a success or error message based on the server response
        loginMessage.innerText = 'Login successful!';

        // Redirect to the home page after successful login
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000); // Redirect after 2 seconds (adjust the delay as needed)
    });
});
