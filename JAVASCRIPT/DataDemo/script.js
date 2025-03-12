// alert("Goodbye");

//user completes form

//retrieve data = names
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("pw").value;
    let areMarried = document.querySelector('input[name="isMarried"]:checked').value;
    let person = {
        userName,
        password,
        areMarried
    }
    //convert to JSON
    let str =JSON.stringify(person)
    console.log(str);
})

//build an object using this data

//do something - like send the data