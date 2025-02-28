// 1.  Dynamic Age Calculator
//     Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”
const d = new Date();
console.log(d);

let currentYear = d.getFullYear();
console.log(typeof(currentYear));
let birthYear = Number(prompt("What year were you born in?"));
console.log(typeof (birthYear));

let yearDifference = (currentYear,birthYear) => currentYear - birthYear;
console.log("Your age is :",yearDifference(currentYear,birthYear), " or" ,(yearDifference(currentYear,birthYear) - 1), " depending on your birthday");
// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

let Principal = parseInt(prompt("What is the Principal on your loan?"));
let Rate = parseFloat(prompt("What is the Interest Rate on your loan?"));
let Time = parseInt(prompt("What is the Time span of the loan?"));

function calculateSimpleInterest(Principal,Rate,Time){
    return (Principal * Rate * Time)/100;
}

console.log("Your interest owed on this loan is: ",calculateSimpleInterest(Principal,Rate,Time));
// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors:

let colors = ["Blue","Red","Yellow"];
console.log(colors);
let userColor = prompt("What color would you like to add?");
function addColor(array) {
    array.unshift(userColor);
    return array;
}
let udpdateArray = addColor(colors);
console.log("Updated array: " + udpdateArray);


// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.
let currentDay = new Date(d);
let proceed = true;
let regEx = /^\d{4}-\d{2}-\d{2}$/;


while (proceed) {
    screenPrompt = prompt("Please enter date in YYYY-MM-DD format:");
    if (regEx.test(screenPrompt)) {
        console.log(screenPrompt);
        break;
    }else {
        console.log("Please use the correct date format.");
    }
}
let futureDay = new Date( screenPrompt + " " + currentDay.toLocaleTimeString());

console.log(currentDay);
console.log(futureDay);
function calculateDaysUntil(currentDay,futureDay){
    return Math.round((futureDay - currentDay)/(24*3600*1000));
}

console.log("Days until the event: ",calculateDaysUntil(currentDay,futureDay));

// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Farenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//     "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “

let userTempCelsius = parseFloat(prompt("Please input a temperature in Celsius."))

function classifyTemperatre(temp){
    let tempFarh = (temp * (9/5)) + 32;
    return tempFarh > 100
            ? "Hot"
            : tempFarh > 80
            ? "Warm"
            : tempFarh < 40
            ? "Cold"
            : "Chilly"
    }

console.log("The temperature is: ",classifyTemperatre(userTempCelsius));

// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”

let students =[
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 18}
];

let ageModifier = () => {


    let student;

    while (!student) {
        let studentName = prompt("Enter a student you would like to change their age.");
        student = students.find(students => students.name === studentName);
        if (!student) {
            console.log("This student does not exist");
        }
    }
    let newAge;
    while (isNaN(newAge) || newAge === "") {
        newAge = prompt("Enter the new age: ");
        if (isNaN(newAge) || newAge === "") {
            console.log("Error: this is not a valid entry for the age.");
        }
    }
    student.age = Number(newAge);
    console.log("Updated students: ",students)

}

ageModifier();

// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “

let classifyGrade = () => {
    let gradeInput = parseInt(prompt("Input a grade as a number."))
    return gradeInput >= 90
           ? "A"
           : gradeInput >= 80
           ? "B"
           : gradeInput >= 70
           ? "C"
           : gradeInput >= 60
           ? "D"
           : "F"
}
console.log("The grade classification is : ",classifyGrade());

// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.

let shoppingList = ["eggs","butter","flour"];
let newItem =  prompt("Please pick an item you would like to add.");

const modifyItem = (shoppingList,newItem) => {

      shoppingList.push(newItem);
    console.log(shoppingList);
}
modifyItem(shoppingList,newItem)

// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “

let dayOfWeekArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

let whatDayOfWeek = () => {
    let day = d.getDay();
    console.log(`Today is : ${dayOfWeekArray[day]}`);
}
whatDayOfWeek();

// 10. How Long Until Graduation
// Use a fat arrow function to determine today’s date.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.

let suffix = ['st', 'nd', 'rd','th'];
let monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let today = new Date();
let date = today.getDate();
let year = today.getFullYear();
let month = today.getMonth();

let index;

let todayDate = () => {
    if (date in [1,21,31])
        index = 0;
    if (date in [2,22])
        index = 1;
    if (date in [3,23])
        index =2;
    else{ index = 3};
    console.log(`${year}, ${monthArray[month]} ${date}${suffix[index]}`);
}
todayDate();
let lastDay = new Date(2025,4,17);
console.log("Graduation Date: ",lastDay);
function calculateDaysUntilGrad(today,lastDay){
    return Math.round((lastDay - today)/(24*3600*1000));
}

console.log(`Graduation is in ${calculateDaysUntilGrad(today,lastDay)} days`);

