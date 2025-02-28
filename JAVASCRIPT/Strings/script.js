let person = {
    fname : "dan",
    lname : "dowd",
    age : 27
}

fullName: function (){
    console.log("First name is " + this.fname + " and age is " + this.age);
}

person.fullName()
console.log(person.lname.toLocaleUpperCase());
console.log(person.lname);