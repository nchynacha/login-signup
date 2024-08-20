document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.input-submit');
    const usernameField = document.getElementById('user');
    const passwordField = document.getElementById('password');

    loginButton.addEventListener('click', function(event) {
        // Prevent form submission for demonstration
        event.preventDefault();
        
        // Get user input
        const username = usernameField.value;
        const password = passwordField.value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Logging in...');
            // Here you can add your login logic, e.g., sending data to a server
        }
    });

    // Optional: Handle Enter key press for form submission
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            loginButton.click();
        }
    });
});
