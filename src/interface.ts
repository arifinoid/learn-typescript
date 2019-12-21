interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  name: string;
  isGaming: boolean;

  on(): void {
    console.log("On");
  }

  off(): void {
    console.log("Off");
  }
}

class MacBook implements Laptop {
  constructor(name: string, isGlowingLogo: boolean) {
    this.name = name;
    this.isGlowingLogo = isGlowingLogo;
  }

  name: string;
  isGlowingLogo: boolean;

  on(): void {
    console.log("On");
  }

  off(): void {
    console.log("Off");
  }
}

const asus = new Asus("ROG", true);
const macBook = new MacBook("MacBook Pro", true);
asus.on();
asus.off();
console.log(asus.name);
console.log(macBook.name);
macBook.on();
macBook.off();
