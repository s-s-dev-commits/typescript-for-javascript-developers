export {};

class Me {
  // isProgrammer: boolean = true;
  // firstName: string = 'shingo';
  // lastName: string = 'shimada';
  static isProgrammer: boolean = true;
  static firstName: string = 'shingo';
  static lastName: string = 'shimada';

  static work() {
    // staticメソッド内で、static変数にアクセスできるが、クラス名よりthisがよい
    return `TypeScript たのしい！私の名前は、${Me.firstName} ${this.lastName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
