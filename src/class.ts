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
  private _email: string = "";
  static getRole = (): string => "Admin";

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

  set email(value: string) {
    // validator
    if (value.length < 5) {
      // just for example
      this._email = "kurang panjang dude";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

const admin = new Admin("Budi", 30, "0812345");
admin.email = "admin@budi.com";

console.log(admin);
console.log(admin.getName());
console.log(admin.email);

// for static method
// const admin = Admin.getRole();
// console.log(admin);
