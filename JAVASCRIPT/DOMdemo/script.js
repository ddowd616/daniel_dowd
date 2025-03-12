let food = document.getElementById("fruit");
console.log(food);
food.style.color = "red";
food.style.backgroundColor = "green";
food.style.fontSize = "50px"
let foods = document.getElementsByClassName("breakfast");
console.log(foods[0]);
console.log(foods[1]);
let food_tag = document.getElementsByTagName("li");
console.log(food_tag[0]);
let food_qselect = document.querySelector("#fruit")
console.log(food_qselect);
let food_qselect_all = document.querySelectorAll("h1");
console.log(food_qselect_all[food_qselect_all.length-1]);
document.querySelector("li").textContent = "Sold Out!";
document.querySelector("li").innerHTML = "Chocolate <b> Hazelnut </b> Cookies";

document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.amazon.com/ref=nav_logo");

let button = document.getElementsByTagName("button");
console.log(button)
// button[1].addEventListener("click",()=>{alert("clicked!!!")});
for(i=0;i<button.length;i++){
    button[i].addEventListener("click",(mouseEvent)=>{
        alert(`Clicked: ${i}`)
    })
}

