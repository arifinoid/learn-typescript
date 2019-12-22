import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";
import { b } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  a() {
    return Keyboard.a();
  }

  b() {
    return b();
  }
}

export default BaseLaptop;
