export class User {
  constructor(name: string, public age: number) {
    this.name = name;
  }

  public name: string;
  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

const user = new User("Matt", 26);
console.log(user);

// public bisa diakses di semua class /  dari luar class
// protected hanya bisa diakses dari class tersebut, dan turunannya
// private hanya bisa diakses oleh class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { write: boolean; read: boolean } {
    return {
      write: this.write,
      read: this.read
    };
  }
}

const admin = new Admin("Budi", 30, "0812345");
console.log(admin);
console.log(admin.getName());
