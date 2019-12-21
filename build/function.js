"use strict";
// func return type
var getName = function () {
    return "Hello, I'm Matt";
};
var printName = function () {
    console.log(getName());
};
// argument types
var multiply = function (value1, value2) {
    return value1 * value2;
};
printName();
console.log(multiply(10, 2));
var add = function (value1, value2) {
    return value1 + value2;
};
console.log(add(1, 2));
// default parameter
var fullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Arifin"; }
    return firstName + " " + lastName;
};
console.log(fullName("Rina"));
// rest parameter
var getAge = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getAge(1));
