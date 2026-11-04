export {};

let year: number = 1983;
// tsxで監視中は文法エラーでも実行される
// jsなら文法エラーではないから
// year = true;
console.log({ year: year });

let age: number = 0x2a;
console.log({ age });

let name: string = 'shingo';
console.log({ name });
