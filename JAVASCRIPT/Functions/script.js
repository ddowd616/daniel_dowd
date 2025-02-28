
// take a number and square
let num = 5;

function squares(num){

    return num * num;
}
// convert to a fat arrow
const squares2 = (num) => {

    return num * num;
}
// convert to a fat arrow, remove parentheses
const squares3 = num => {

    return num * num;
}

// convert to a fat arrow, with implied return
const squares4 = num => num * num;

// convert to a fat arrow, with implied return with multiple lines of code
const squares5 = num => (
    num * num
);

// convert to a fat arrow multiple parameters, with implied return
// you can use "undefined" in input to use default values
const area = (len,width=4) => (
    len * width
);


console.log(squares(num));
console.log(squares2(4));
console.log(squares3(7));
console.log(squares4(8));
console.log(squares5(9));
console.log("Area: ",area(3,9));

//IIFE *anonymous function you want to invoke immediately by itself and never use it again
// (function (){
//     console.log("Hello");
// })()

//fat arrow function
//const add = (a,b) =>