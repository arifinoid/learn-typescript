abstract class Vehicle {
  abstract wheels: number;
  start = (): void => {
    console.log("brrummm");
  };
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let motor = new Motorcycle();
let car = new Car();

console.log(car.wheels);
car.start();
console.log(motor.wheels);
motor.start();
