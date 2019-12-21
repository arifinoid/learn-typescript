"use strict";
function getData(value) {
    return value;
}
console.log(getData("matt").length);
console.log(getData(3).length); // undefined, which means not OK
// generic type
function myData(value) {
    return value;
}
console.log(myData("matt").length);
console.log(myData(3).toString()); // It will show its own prototype, which means very cool
var myDataWithArrowFunc = function (value) {
    return value;
};
console.log(myDataWithArrowFunc("matt").length);
console.log(myDataWithArrowFunc(3).toString()); // It will show its own prototype, which means very cool
