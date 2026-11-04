export {};

// シグネチャを定義してから、関数定義(型はany)する
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
    // } else {
    //   throw '引数の型を確認してください';
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// シグネチャで定義していないのでNG
// console.log(double(true));
