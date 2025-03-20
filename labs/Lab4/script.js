let elem = document.getElementById("mypagelink");

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

const menuItems = [
    { name: "Picanha", description: "Juicy top sirloin cap grilled to perfection.", price: 25.99, image: "./assets/Picanha.jpg" },
    { name: "Feijao Tropeiro", description: "Traditional Brazilian dish from Minas Gerais, made with beans, sausage, bacon, eggs, and manioc flour.", price: 12.99, image: "./assets/Feijao-Tropeiro-735x538.webp" },
    { name: "Feijoada", description: "A rich, hearty black bean stew slow-cooked with a variety of pork cuts, beef, and seasoning.", price: 14.99, image: "./assets/feijoada.jpg" },
    { name: "Brigadeiros", description: "A classic Brazilian dessert, similar to chocolate truffles but with a softer, fudgier texture.", price: 12.99, image: "./assets/brigadiero.jpg" },
    { name: "Beijinho", description: "\"Little Kisses\" a classic Brazilian sweet, similar to brigadeiros, but made with coconut instead of cocoa.", price: 12.99, image: "./assets/beijinho.jpg" }
];

let currentIndex = 0;
const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const itemName = document.getElementById("item-name");
const itemDescription = document.getElementById("item-description");
const itemPrice = document.getElementById("item-price");
const itemImage = document.getElementById("item-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function updateMenu() {
    const currentItem = menuItems[currentIndex];
    itemName.textContent = currentItem.name;
    itemDescription.textContent = currentItem.description;
    itemPrice.textContent = currencyFormatter.format(currentItem.price);
    itemImage.src = currentItem.image;
    itemImage.alt = currentItem.name;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? menuItems.length - 1 : currentIndex - 1;
    updateMenu();
    }


    function nextImage() {
        currentIndex = (currentIndex === menuItems.length - 1) ? 0 : currentIndex + 1;
        updateMenu();
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", prevImage);
        nextButton.addEventListener("click", nextImage);
// Initialize menu display
        updateMenu();
    }


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


