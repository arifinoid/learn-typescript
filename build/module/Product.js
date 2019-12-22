"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asus_1 = __importDefault(require("./Asus"));
var MacBook_1 = __importDefault(require("./MacBook"));
var zenBook = new Asus_1.default("ZenBook", true, true);
var macBook = new MacBook_1.default(2019, false, false);
console.log(zenBook);
console.log(macBook);
