const BASEURL = "https://dog.ceo/api/breed";
const ROUTE = "images/random/10";
const RANDOM_ROUTE = "https://dog.ceo/api/breeds/image/random/10";

let breedId = function breedId() {
    return document.getElementById("breed").value;

}

document.getElementById("breed").addEventListener("change", function() {
    document.getElementById("selected-breed").textContent = this.value;
    console.log("Selected Breed:", this.value);
});





let button = document.getElementById("generate");
button.addEventListener("click", async () => {
    const imageElement = document.getElementById("carousel-image");
    let notSelected = breedId() === "NotSelected";
    const apiUrl = notSelected ? RANDOM_ROUTE :`${BASEURL}/${breedId()}/${ROUTE}`;
    let images = [];
    let index = 0;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        images = data.message;
        imageElement.src = images[index];
        console.log(images)
    }

    catch (error) {
        console.error("Error fetching dog images:", error);
    }
    window.nextSlide = function() {
        if (images.length === 0) return;
        index = (index + 1) % images.length;
        imageElement.src = images[index];
    };

    window.prevSlide = function() {
        if (images.length === 0) return;
        index = (index - 1 + images.length) % images.length;
        imageElement.src = images[index];
    };
});
// Carousel functionality
let index = 0;

function showSlide() {
    const container = document.getElementById("carousel-container");
    const totalImages = document.querySelectorAll(".carousel img").length;
    if (index >= totalImages) index = 0;
    if (index < 0) index = totalImages - 1;
    container.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index++;
    showSlide();
}

function prevSlide() {
    index--;
    showSlide();
}
// let button = document.getElementById("generate");
// button.addEventListener("click", (mouseEvent) =>{
//     mouseEvent.preventDefault();
//     console.log(document.getElementById('breed').value);
//     fetch(endpoint)
//         .then(data => {
//             console.log(data)
//             if(data.ok){
//                 let result = data.json()
//                 return result
//             }
//             else{
//                 throw Error("Fetch Failed")
//             }
//         }) //get data; if ok - parse it, else error handling
//         .then(parsedData => {
//             let img = document.querySelector("img")
//             console.log(parsedData)
//             img.setAttribute("src",parsedData.message)
//         }) //deal with parsed data
//         .catch(error => {
//             console.log(error)
//         })
// })