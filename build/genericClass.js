"use strict";
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function (elements) {
        var _a;
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3);
var chars = new List("a", "b", "c");
var random = new List(1, "2", 3, "4");
numbers.add(4);
numbers.addMultiple([5, 6, 7]);
chars.add("d");
chars.addMultiple(["e", "f", "g"]);
console.log(numbers.getAll());
console.log(chars.getAll());
console.log(random.getAll());
