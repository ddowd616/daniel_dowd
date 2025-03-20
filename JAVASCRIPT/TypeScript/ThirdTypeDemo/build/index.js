"use strict";
let cat = "meow";
let age = 23;
let isMarried;
let dogNames;
let dogNames2 = ["Atlas", "Ranger", "Tony"];
let numArray;
numArray = [2, 4, 5, 6];
let people;
const add = () => {
    console.log("Hi");
    return "hello";
};
add();
const getAge = (num, fname = "Dan") => {
    console.log(fname);
    return num * 4;
};
console.log(getAge(3));
