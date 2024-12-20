<!DOCTYPE html>
 <!--
Program name: patient-form.html
Author: Riya Malhotra
Date created: Oct 19, 2024
Date last edited: Oct 20, 2024
Version: 1.0
Description: This file contains the patient registration form for Precision Care Medical.
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Patient Registration</title>
    <link href="./styles.css" rel="stylesheet">
    <script>
        function displayDate() {
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            const today = new Date().toLocaleDateString('en-US', options);
            document.getElementById('currentDate').innerHTML = today;
        }

        function displayReview() {
            const firstName = document.getElementById('first_name').value.trim();
            const middleInitial = document.getElementById('middle_initial').value.trim();
            const lastName = document.getElementById('last_name').value.trim();
            const dob = document.getElementById('dob').value.trim();
            const ssn = document.getElementById('ssn').value.trim();
            const address1 = document.getElementById('address1').value.trim();
            const address2 = document.getElementById('address2').value.trim();
            const city = document.getElementById('city').value.trim();
            const state = document.getElementById('state').value;
            const zip = document.getElementById('zip').value.trim();
            const email = document.getElementById('email').value.trim();
            const symptoms = document.getElementById('symptoms').value.trim();
            const travel = document.querySelector('input[name="travel"]:checked').value;
            const vaccinated = document.querySelector('input[name="vaccinated"]:checked').value;
            const medications = document.querySelector('input[name="medications"]:checked').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const healthRating = document.getElementById('health_rating').value;
            const userId = document.getElementById('user_id').value.trim();

            const reviewInfo = `
                <h3>Review Information:</h3>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Middle Initial:</strong> ${middleInitial}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Social Security Number:</strong> ${ssn}</p>
                <p><strong>Address Line 1:</strong> ${address1}</p>
                <p><strong>Address Line 2:</strong> ${address2}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>State:</strong> ${state}</p>
                <p><strong>Zip Code:</strong> ${zip}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Current Symptoms:</strong> ${symptoms}</p>
                <p><strong>International Travel:</strong> ${travel}</p>
                <p><strong>Vaccinated:</strong> ${vaccinated}</p>
                <p><strong>Currently Taking Medications:</strong> ${medications}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Health Rating:</strong> ${healthRating}</p>
                <p><strong>Desired User ID:</strong> ${userId}</p>
            `;
            
            document.getElementById('reviewSection').innerHTML = reviewInfo;
        }
    </script>
</head>
<body onload="displayDate()">

    <!-- Banner Section -->
    <header>
        <div class="banner">
            <h1>Precision Care Medical</h1>
            <img src="../../Precision_Care.png" alt="Company Logo" width="300">
            <p>Today is: <span id="currentDate"></span></p>
        </div>
    </header>

    <!-- Main Form Section -->
    <main>
        <h2>Patient Registration Form</h2>
        <form id="registrationForm">
            <table>
                <tr>
                    <td><label for="first_name">First Name:</label></td>
                    <td><input type="text" id="first_name" name="first_name" maxlength="30" required></td>
                    <td><label for="middle_initial">Middle Initial:</label></td>
                    <td><input type="text" id="middle_initial" name="middle_initial" maxlength="1"></td>
                    <td><label for="last_name">Last Name:</label></td>
                    <td><input type="text" id="last_name" name="last_name" maxlength="30" required></td>
                </tr>
                <tr>
                    <td><label for="dob">Date of Birth (MM/DD/YYYY):</label></td>
                    <td><input type="text" id="dob" name="dob" placeholder="MM/DD/YYYY" required></td>
                </tr>
                <tr>
                    <td><label for="ssn">SSN:</label></td>
                    <td>
                        <input type="text" id="ssn" name="ssn" title="Enter your SSN in the format XXX-XX-XXXX" pattern="\d{3}-\d{2}-\d{4}" required>
                    </td>
                </tr>
                <tr>
                    <td><label for="address">Address:</label></td>
                    <td>
                        <input type="text" id="address" name="address" title="Enter your full address, including street, city, and zip code">
                    </td>
                </tr>
                <tr>
                    <td><label for="city">City:</label></td>
                    <td><input type="text" id="city" name="city" maxlength="30" required></td>
                    <td><label for="state">State:</label></td>
                    <td>
                        <select id="state" name="state" required>
                            <option value="">Select State</option>
                            <option value="TX">Texas</option>
                            <option value="CA">California</option>
                        </select>
                    </td>
                    <td><label for="zip">Zip Code:</label></td>
                    <td><input type="text" id="zip" name="zip" maxlength="10" required></td>
                </tr>
                <tr>
                    <td><label for="email">Email:</label></td>
                    <td>
                        <input type="email" id="email" name="email" title="Enter a valid email address" required>
                    </td>
                </tr>
                <tr>
                    <td><label for="phone">Phone:</label></td>
                    <td>
                        <input type="tel" id="phone" name="phone" title="Enter your phone number in the format XXX-XXX-XXXX" pattern="\d{3}-\d{3}-\d{4}">
                    </td>
                </tr>
                <tr>
                    <td><label for="symptoms">Current Symptoms:</label></td>
                    <td colspan="5">
                        <textarea id="symptoms" name="symptoms" rows="3" cols="50"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="6">Check all that apply:</td>
                </tr>
                <tr>
                    <td colspan="6">
                        <input type="checkbox" name="illnesses" value="Chicken Pox"> Chicken Pox
                        <input type="checkbox" name="illnesses" value="Measles"> Measles
                        <input type="checkbox" name="illnesses" value="Covid-19"> Covid-19
                        <input type="checkbox" name="illnesses" value="Small Pox"> Small Pox
                        <input type="checkbox" name="illnesses" value="Tetanus"> Tetanus
                    </td>
                <tr>
                    <td>Have you traveled internationally in the last 6 months?</td>
                    <td><input type="radio" name="travel" value="Yes" required> Yes</td>
                    <td><input type="radio" name="travel" value="No"> No</td>
                <tr>
                
                <tr>
                    <td>Have you been vaccinated?</td>
                    <td><input type="radio" name="vaccinated" value="Yes" required> Yes</td>
                    <td><input type="radio" name="vaccinated" value="No"> No</td>
                </tr>

                <tr>
                    <td>Are you currently taking any medications?</td>
                    <td><input type="radio" name="medications" value="Yes" required> Yes</td>
                    <td><input type="radio" name="medications" value="No"> No</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td><input type="radio" name="gender" value="Male" required> Male</td>
                    <td><input type="radio" name="gender" value="Female"> Female</td>
                    <td><input type="radio" name="gender" value="Other"> Other</td>
                </tr>
                <tr>
                    <td>Health Rating (1-10):</td>
                    <td><input type="range" id="health_rating" name="health_rating" min="1" max="10"></td>
                </tr>
                <tr>
                    <td><label for="user_id">Desired User ID:</label></td>
                    <td><input type="text" id="user_id" name="user_id" maxlength="20" required></td>
                </tr>
                <tr>
                    <td><label for="password">Password:</label></td>
                    <td>
                        <input type="password" id="password" name="password" title="Enter a secure password, at least 8 characters long" required>
                    </td>
                </tr>
                <tr>
                    <td><label for="confirmPassword">Confirm Password:</label></td>
                    <td>
                        <input type="password" id="confirmPassword" name="confirmPassword" title="Re-enter your password for confirmation" required>
                        <span id="passwordMessage" class="error-message"></span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <button type="submit">Submit</button>
                        <button type="reset">Clear and Start Over</button>
                        <button type="button" onclick="displayReview()">Review</button>
                    </td>
                </tr>
                    </td>
                </tr>
            </table>
        </form>
    </main>
    <div id="reviewSection" style="margin-top: 20px;"></div>
    <div id="validationSummary"></div>

    <script src="./validation.js"></script>

    <script>
        const states = [
            { code: "AL", name: "Alabama" },
            { code: "AK", name: "Alaska" },
            { code: "AZ", name: "Arizona" },
            { code: "AR", name: "Arkansas" },
            { code: "CA", name: "California" },
            { code: "CO", name: "Colorado" },
            { code: "CT", name: "Connecticut" },
            { code: "DE", name: "Delaware" },
            { code: "FL", name: "Florida" },
            { code: "GA", name: "Georgia" },
            { code: "HI", name: "Hawaii" },
            { code: "ID", name: "Idaho" },
            { code: "IL", name: "Illinois" },
            { code: "IN", name: "Indiana" },
            { code: "IA", name: "Iowa" },
            { code: "KS", name: "Kansas" },
            { code: "KY", name: "Kentucky" },
            { code: "LA", name: "Louisiana" },
            { code: "ME", name: "Maine" },
            { code: "MD", name: "Maryland" },
            { code: "MA", name: "Massachusetts" },
            { code: "MI", name: "Michigan" },
            { code: "MN", name: "Minnesota" },
            { code: "MS", name: "Mississippi" },
            { code: "MO", name: "Missouri" },
            { code: "MT", name: "Montana" },
            { code: "NE", name: "Nebraska" },
            { code: "NV", name: "Nevada" },
            { code: "NH", name: "New Hampshire" },
            { code: "NJ", name: "New Jersey" },
            { code: "NM", name: "New Mexico" },
            { code: "NY", name: "New York" },
            { code: "NC", name: "North Carolina" },
            { code: "ND", name: "North Dakota" },
            { code: "OH", name: "Ohio" },
            { code: "OK", name: "Oklahoma" },
            { code: "OR", name: "Oregon" },
            { code: "PA", name: "Pennsylvania" },
            { code: "RI", name: "Rhode Island" },
            { code: "SC", name: "South Carolina" },
            { code: "SD", name: "South Dakota" },
            { code: "TN", name: "Tennessee" },
            { code: "TX", name: "Texas" },
            { code: "UT", name: "Utah" },
            { code: "VT", name: "Vermont" },
            { code: "VA", name: "Virginia" },
            { code: "WA", name: "Washington" },
            { code: "WV", name: "West Virginia" },
            { code: "WI", name: "Wisconsin" },
            { code: "WY", name: "Wyoming" }
        ];

        document.getElementById('state').innerHTML = states.map(state => `<option value="${state.code}">${state.name}</option>`).join('');
    </script>
</body>
</html>
