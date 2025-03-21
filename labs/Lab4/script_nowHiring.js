document.getElementById("moreInfo").addEventListener("input", function() {
    const maxLength = 30;
    const currentLength = this.value.length;
    const charCount = maxLength - currentLength;

    // Update the character counter
    document.getElementById("charCount").textContent = `Characters left: ${charCount}`;
});
// Populate state dropdown dynamically
const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
];

const dropdown = document.getElementById("inputState");

// Populate the dropdown dynamically with states
states.forEach(state => {
    const opt = document.createElement("option");  // Create an <option> element
    opt.value = state.toLowerCase().replace(/\s+/g, "-"); // Set the value (e.g., "new-york")
    opt.textContent = state; // Set the visible text
    dropdown.appendChild(opt); // Add the <option> to the <select>
});

// Form submission event
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page refresh

});

// Validate form fields
function validateForm() {
    let firstName = document.getElementById("inputFirst").value.trim();
    let lastName = document.getElementById("inputLast").value.trim();
    let phone = document.getElementById("inputPhone").value.trim();
    let age = document.getElementById("inputAge").value.trim();
    let address = document.getElementById("inputAddress").value.trim();
    let address2 = document.getElementById("inputAddress2").value.trim();
    let city = document.getElementById("inputCity").value.trim();
    let state = document.getElementById("inputState").value.trim();
    let zip = document.getElementById("inputZip").value.trim();
    let errorBox = document.getElementById("error-box");
    let errorMessage = "";

    // First Name & Last Name validation
    if (firstName === "") {
        errorMessage += "First name is required.<br>";
    }
    if (lastName === "") {
        errorMessage += "Last name is required.<br>";
    }

    // Phone Number validation
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (phone === "") {
        errorMessage += "Phone number is required.<br>";
    } else if (!phonePattern.test(phone)) {
        errorMessage += "Phone number must be in form xxx-xxx-xxxx.<br>";
    }

    // Age validation (must be between 21 and 99)
    if (age === "") {
        errorMessage += "Age is required.<br>";
    } else if (!/^\d+$/.test(age) || age < 21 || age > 99) {
        errorMessage += "Age must be a number between 21 and 99.<br>";
    }

    // Address validation
    if (address === "") {
        errorMessage += "Address is required.<br>";
    }
    if (address2 === "") {
        errorMessage += "Address 2 is required.<br>";
    }
    if (city === "") {
        errorMessage += "City is required.<br>";
    }
    if (state === "") {
        errorMessage += "State is required.<br>";
    }

    // Zip code validation (must be 5 digits)
    let zipPattern = /^\d{5}$/;
    if (zip === "") {
        errorMessage += "Zip code is required.<br>";
    } else if (!zipPattern.test(zip)) {
        errorMessage += "Zip code must be a 5-digit number.<br>";
    }

    // Display the error box or submit the form
    if (errorMessage) {
        errorBox.innerHTML = errorMessage;
        errorBox.style.display = "block";
        return false;
    } else {
        errorBox.style.display = "none"; // Hide error box if no errors
        console.log("Form Submitted with the following data:");
        console.log({
            "First Name": firstName,
            "Last Name": lastName,
            "Phone Number": phone,
            "Age": age,
            "Address": address,
            "Address 2": address2,
            "City": city,
            "State": state,
            "Zip Code": zip
        });
        return true;
    }
}


