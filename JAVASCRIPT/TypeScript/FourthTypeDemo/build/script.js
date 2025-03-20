"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person1 = {
    fname: "danny",
    age: 27,
    isMarried: true,
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    },
    getAge: function (age, name) {
        return age * 10;
    }
};
let person2 = {
    fname: "carlos",
    lname: "santana",
    age: 93,
    isMarried: true,
    children: ["Todd", "Paul"],
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    },
    getAge(age, name) {
        return 23 * age;
    }
};
console.log(person1.getFullName);
console.log(person2);
