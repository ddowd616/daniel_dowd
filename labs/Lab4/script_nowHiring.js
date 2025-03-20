//Form Validation and input values
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