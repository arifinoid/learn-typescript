"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("On");
    };
    Asus.prototype.off = function () {
        console.log("Off");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, isGlowingLogo) {
        this.name = name;
        this.isGlowingLogo = isGlowingLogo;
    }
    MacBook.prototype.on = function () {
        console.log("On");
    };
    MacBook.prototype.off = function () {
        console.log("Off");
    };
    return MacBook;
}());
var asus = new Asus("ROG", true);
var macBook = new MacBook("MacBook Pro", true);
asus.on();
asus.off();
console.log(asus.name);
console.log(macBook.name);
macBook.on();
macBook.off();
