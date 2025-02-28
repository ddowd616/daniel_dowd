// let numbers = [1,2,3]
// //make a copy to manipulate the data then re
// let data = numbers.slice()
// //append (add to the end) to the array
// //push()
// numbers.push(4)
// console.log(numbers);
// //pop() takes from the end of the array
// let removedElement = numbers.pop()
// console.log(removedElement);
// //prepend adds to the front of the array
// let newResult = numbers.unshift(100)
// console.log(newResult);
//
// //once perfect reassign data to numbers
// numbers = data;

//more of a string method
// .trim
// //"       Cruz is"
// let message = "        Cruz is "
// console.log(message.trim())
// let students = ["Alice","Bob","Charlie"];
// students.push("Diana");
// console.log(students);
// students.pop();
// console.log(students);
// students.unshift("Eve");
// console.log(students);
// students.shift();
// console.log(students);

// .foreach() *does not create a new array
// let numbers = [4,6,8];
// //predicate = element
// numbers.forEach(function (element){
//     console.log(element);
// })

// // .foreach() manipulation
// let names = ["dan","chris","jack"]
// names.forEach(el => {
//     console.log(`${el}'s`)
// })

// //.map() *creates a new array
// let numbers = [2,6,8]
// let doubled = numbers.map(function (num){
//     return num * 2;
// });
// console.log(doubled);

// //.filter() *creates a new array with elements that passed a test
// let newNumbers = [2,3,4];
// let newArray = newNumbers.filter(function (kittycatt){
//     return kittycatt % 2 === 0; //should only return even
// })
// console.log(newArray);

//.sort() *only works for strings *sort is based off ASCII codes IOT sort the array
// let fruits = ["banana","Apple","acorn"];
// let lowerFruits = fruits.map(el =>{
//     return el.toLocaleLowerCase();
// }).sort();
// console.log(lowerFruits);

//how to sort numbers *need the comparison function a - b ascending b - a descending

// let numbers = [10,1,100,3,34,11];
// numbers.sort(function (a,b){
//     return a - b;
// });
// console.log(numbers);

//