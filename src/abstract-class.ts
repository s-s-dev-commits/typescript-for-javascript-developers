export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return `がおー roar`;
  }
}

class Tiger extends Animal {
  cry(): string {
    return `ガオー grrrr`;
  }
}
