//primitives
let cat = "meow";
// let num:number;
let age = 23;
let isMarried: boolean;
//"objects" aka arrays specifically
let dogNames:string[];
let dogNames2 = ["Atlas","Ranger","Tony"];
let numArray: number[];
numArray = [2,4,5,6];
//explicitly a javascript object
let people:object[];

//functions
const add = ()=>{
    console.log("Hi")
    return "hello"
}
add()

const getAge = (num:number,fname:string = "Dan")=>{
    console.log(fname);
    return num * 4;
}

console.log(getAge(3));