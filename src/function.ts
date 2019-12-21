// func return type
const getName = (): string => {
  return "Hello, I'm Matt";
};

const printName = (): void => {
  console.log(getName());
};

// argument types
const multiply = (value1: number, value2: number): number => {
  return value1 * value2;
};

printName();
console.log(multiply(10, 2));

// function as type
type Add = (value1: number, value2: number) => number;
const add: Add = (value1: number, value2: number): number => {
  return value1 + value2;
};

console.log(add(1, 2));

// default parameter
const fullName = (firstName: string, lastName: string = "Arifin"): string => {
  return `${firstName} ${lastName}`;
};

console.log(fullName("Rina"));

// rest parameter
const getAge = (val1: number, val2?: number): string => {
  return `${val1} ${val2}`;
};

console.log(getAge(1));
