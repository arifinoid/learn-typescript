import Asus from "./Asus";
import MacBook from "./MacBook";

let zenBook = new Asus("ZenBook", true, true);
let macBook = new MacBook(2019, false, false);

console.log(zenBook);
console.log(macBook);
