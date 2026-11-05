export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return `${this.name} can run`;
  }
}

class Lion extends Animal {
  // public speed: number;
  constructor(
    name: string, // 親クラスのコンストラクタで、public付き引数なので、ここにはつけていない
    public speed: number,
  ) {
    super(name);
    // this.speed = speed;
  }
  run(): string {
    // const superMessage = super.run();
    return `${super.run()} ${this.speed}km/h`;
  }
}

let animal = new Animal('Mickey');
console.log(animal.run());

let lion = new Lion('Simba', 180);
console.log(lion.run());
