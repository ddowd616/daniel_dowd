const d = new Date();
console.log(d);

let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getDay());
console.log(dayOfWeek[d.getDay()]);