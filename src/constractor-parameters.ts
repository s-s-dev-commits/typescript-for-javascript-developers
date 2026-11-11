export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let taro = new Person('taro', 20);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['shingo', 43];
const shingo = new Person(...profile);
console.log(shingo);

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
