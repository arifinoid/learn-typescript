class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3);
let chars = new List<string>("a", "b", "c");
let random = new List<number | string>(1, "2", 3, "4");

numbers.add(4);
numbers.addMultiple([5, 6, 7]);

chars.add("d");
chars.addMultiple(["e", "f", "g"]);
console.log(numbers.getAll());
console.log(chars.getAll());
console.log(random.getAll());
