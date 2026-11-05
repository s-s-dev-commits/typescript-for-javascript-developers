export {};

class Person {
  // public name: string;
  // protected age: number;

  constructor(
    // ★コンストラクタの引数にアクセス修飾子を付与すると、自動で初期化してくれる
    public name: string,
    protected age: number,
  ) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('shingo', 43);
console.log({ me });
