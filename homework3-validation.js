document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const validationSummary = document.getElementById('validationSummary');
    const passwordMessage = document.getElementById('passwordMessage');
    const validateBtn = document.getElementById('validateBtn');

    validateBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        let errors = [];
        validationSummary.innerHTML = ''; // Clear previous errors
        passwordMessage.textContent = ''; // Clear previous password error message

        // Collect form values
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        const middleInitial = document.getElementById('middle_initial').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const ssn = document.getElementById('ssn').value.trim();
        const address = document.getElementById('address').value.trim();
        const address2 = document.getElementById('address2').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value.trim();
        const email = document.getElementById('email').value.trim();
        const symptoms = document.getElementById('symptoms').value.trim();
        const travel = document.querySelector('input[name="travel"]:checked')?.value;
        const vaccinated = document.querySelector('input[name="vaccinated"]:checked')?.value;
        const medications = document.querySelector('input[name="medications"]:checked')?.value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const healthRating = document.getElementById('health_rating').value;
        const userID = document.getElementById('user_id').value.trim();
        const password = document.getElementById('password').value;
        const rePassword = document.getElementById('re_password').value;

        // Validation checks
        if (!firstName || !/^[A-Za-z'-]{1,30}$/.test(firstName)) errors.push("Invalid First Name.");
        if (!lastName || !/^[A-Za-z'-]{1,30}$/.test(lastName)) errors.push("Invalid Last Name.");
        if (middleInitial && !/^[A-Za-z]{1}$/.test(middleInitial)) errors.push("Middle Initial must be a single letter.");
        if (!dob || !isValidDate(dob)) errors.push("Invalid Date of Birth.");
        if (!ssn || !/^\d{3}-\d{2}-\d{4}$/.test(ssn)) errors.push("Invalid SSN.");
        if (!address || address.length < 2 || address.length > 30) errors.push("Invalid Address.");
        if (address2 && (address2.length < 2 || address2.length > 30)) errors.push("Invalid Address Line 2.");
        if (!city || city.length < 2 || city.length > 30) errors.push("Invalid City.");
        if (!state) errors.push("State is required.");
        if (!zip || !/^\d{5}$/.test(zip)) errors.push("Invalid Zip Code.");
        if (!isValidEmail(email)) errors.push("Invalid Email Address.");
        if (symptoms && symptoms.length < 5) errors.push("Symptoms description should be at least 5 characters long.");
        if (!userID || !/^[A-Za-z][A-Za-z0-9_-]{4,19}$/.test(userID)) errors.push("Invalid User ID.");
        if (!isValidPassword(password)) errors.push("Invalid Password.");
        if (password !== rePassword) {
            errors.push("Passwords do not match.");
            passwordMessage.textContent = "Passwords do not match!";
        }

        // If there are errors, display them; otherwise, submit
        if (errors.length > 0) {
            validationSummary.innerHTML = `<ul><li>${errors.join('</li><li>')}</li></ul>`;
        } else {
            window.location.href = "./homework1-thankyou-1.html"; // Redirect to thank you page
        }
    });

    // Helper function to validate email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Helper function to validate password
    function isValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
        return regex.test(password);
    }

    // Helper function to validate date format
    function isValidDate(dob) {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
        const dateParts = dob.split('/');

        // Validate the date using the regular expression
        if (!regex.test(dob)) {
            return false;
        }

        // Create a Date object from the MM/DD/YYYY format
        const currentDate = new Date();
        const birthDate = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`); // Correct way to construct the Date object

        // Ensure that the birthdate is not in the future
        if (birthDate > currentDate) {
            return false; // Date of birth cannot be in the future
        }

        // Ensure the age is not over 120 years
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        if (age > 120) {
            return false; // Date of birth cannot be more than 120 years ago
        }

        return true;
    }

    // Function to format SSN as "XXX-XX-XXXX" while typing
    function formatSSN(input) {
        let value = input.value.replace(/\D/g, ""); // Remove non-digit characters
        if (value.length > 9) value = value.slice(0, 9); // Limit to 9 digits

        // Automatically add dashes
        if (value.length > 5) {
        input.value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
    } else if (value.length > 3) {
        input.value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else {
        input.value = value;
    }
    }

    // Function to validate the SSN format before form submission
    function validateSSN() {
        const ssnInput = document.getElementById("ssn");
        const errorMessage = document.getElementById("error-message");
        const ssnValue = ssnInput.value.replace(/-/g, ""); // Remove dashes for validation

        // Check if the input is exactly 9 digits
        if (!/^\d{9}$/.test(ssnValue)) {
            errorMessage.textContent = "Please enter a valid 9-digit Social Security Number.";
            errorMessage.style.color = "red";
            return false; // Prevent form submission
    }

        // Clear the error message if validation passes
        errorMessage.textContent = "";
        return true;
    }

    function submitForm() {
        const ssnInput = document.getElementById("ssn");
        const errorMessage = document.getElementById("error-message");
        const ssnValue = ssnInput.value.replace(/-/g, ""); // Remove dashes for validation

    window.location.href = "./homework1-thankyou-1.html";
    }

    window.showHealthRating = function (value) {
        document.getElementById('health_rating_output').textContent = value;
    };
});
