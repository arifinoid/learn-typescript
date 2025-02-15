"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
var user = new User("Matt", 26);
console.log(user);
// public bisa diakses di semua class /  dari luar class
// protected hanya bisa diakses dari class tersebut, dan turunannya
// private hanya bisa diakses oleh class itu sendiri
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            write: this.write,
            read: this.read
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            // validator
            if (value.length < 5) {
                // just for example
                this._email = "kurang panjang dude";
            }
            else {
                this._email = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Admin.getRole = function () { return "Admin"; };
    return Admin;
}(User));
var admin = new Admin("Budi", 30, "0812345");
admin.email = "admin@budi.com";
console.log(admin);
console.log(admin.getName());
console.log(admin.email);
// for static method
// const admin = Admin.getRole();
// console.log(admin);
