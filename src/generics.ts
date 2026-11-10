export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

class Mirror {
  constructor(public value: number) {}

  echo(): number {
    return this.value;
  }
}
console.log(new Mirror(200).echo());

class Mirror2<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
console.log(new Mirror2<number>(200).echo());
console.log(new Mirror2<string>('Good Night').echo());
console.log(new Mirror2<boolean>(false).echo());
