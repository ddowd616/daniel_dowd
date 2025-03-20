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

        prevButton.addEventListener("click", prevImage);
        nextButton.addEventListener("click", nextImage);
// Initialize menu display
        updateMenu();






