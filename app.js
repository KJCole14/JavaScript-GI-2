//Very easy
console.log(Math.min(69, 42));

//easy
const fName = ["Kabah", "Kevin", "Elijah"];
const lName = ["Coletrane", "Taylor", "Young"];
const age = [23, 22, 21]; //not actual ages... just need different numbers

console.log("Hello! My name is " + fName[1] + " " + lName[1] + ", I am " + age[1] + " years old.")


//medium

let num = prompt("Enter month number");
month = ["invalid", "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
if (num < 1) {
    alert("Please enter a valid month number (1 - 12)");
}
else if (num > 12) {
    alert("Please enter a valid month number (1 - 12)");
}
else {
    console.log(month [num]);
}


//Hard
var tomWeight = 8;
var tomHeight = 9;
var jerryWeight = 45;
var jerryHeight = 10;

var tomBMI = tomWeight / tomHeight ** 2;
console.log(tomBMI);

var jerryBMI = jerryWeight / jerryHeight ** 2;
console.log(jerryBMI);

console.log("Does Tom have a higher BMI than Jerry? " + (jerryBMI < tomBMI));