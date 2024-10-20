document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const validationSummary = document.getElementById('validationSummary');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let errors = [];
        validationSummary.innerHTML = ''; // Clear previous validation messages

        // Get form field values
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        const middleInitial = document.getElementById('middle_initial').value.trim(); // Add middle initial
        const dob = document.getElementById('dob').value.trim();
        const ssn = document.getElementById('ssn').value.trim();
        const address1 = document.getElementById('address1').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value.trim();
        const email = document.getElementById('email').value.trim();
        const userID = document.getElementById('user_id').value.trim(); // Desired User ID
        const password = document.getElementById('password').value;
        const rePassword = document.getElementById('re_password').value;

        // Basic validation checks
        if (!firstName) {
            errors.push("First Name is required.");
        }
        if (!lastName) {
            errors.push("Last Name is required.");
        }
        if (middleInitial && !/^[A-Za-z]$/.test(middleInitial)) {
            errors.push("Middle Initial must be 1 character, letters only.");
        }
        if (!dob || !isValidDate(dob)) {
            errors.push("Date of Birth is required and must be in MM/DD/YYYY format.");
        }
        if (!ssn) {
            errors.push("Social Security Number is required.");
        }
        if (!address1) {
            errors.push("Address Line 1 is required.");
        }
        if (!city) {
            errors.push("City is required.");
        }
        if (!state) {
            errors.push("State is required.");
        }
        if (!zip) {
            errors.push("Zip Code is required.");
        }
        if (!email || !isValidEmail(email)) {
            errors.push("Valid Email Address is required.");
        }
        if (!isValidUserID(userID)) {
            errors.push("User ID must be 5 to 30 characters long, start with a letter, and contain only letters, numbers, underscores, or dashes.");
        }
        if (!isValidPassword(password)) {
            errors.push("Password must be 8 to 30 characters long, contain at least 1 upper case letter, 1 lower case letter, 1 digit, and 1 special character (excluding quotes).");
        }
        if (password !== rePassword) {
            errors.push("Passwords do not match.");
        }
        if (userID.toLowerCase().includes(password.toLowerCase()) || userID.toLowerCase() === password.toLowerCase()) {
            errors.push("Password cannot equal your User ID or have part of your User ID.");
        }

        // Display validation messages
        if (errors.length > 0) {
            validationSummary.innerHTML = `<ul><li>${errors.join('</li><li>')}</li></ul>`;
        } else {
            // Convert user ID to lowercase and display it
            const correctedUserID = userID.toLowerCase();
            alert(`User ID: ${correctedUserID}`); // Display corrected User ID
            // Redirect to the thank you page
            window.location.href = "homework1-thankyou-1.html"; 
        }
    });

    // Function to validate date format
    function isValidDate(dateString) {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/; // MM/DD/YYYY
        return regex.test(dateString);
    }

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to validate desired User ID
    function isValidUserID(userID) {
        const regex = /^[A-Za-z][A-Za-z0-9_-]{4,29}$/; // Starts with a letter, 5 to 30 characters long
        return regex.test(userID);
    }

    // Function to validate password
    function isValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_=+\\\/><.,`~])[A-Za-z\d!@#%^&*()\-_=+\\\/><.,`~]{8,30}$/;
        return regex.test(password);
    }
});
