export {};

let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];
console.log({ numbers });
console.log({ numbers2 });

let strings: Array<string> = ['Tokyo', 'Osaka', 'Nagoya'];
let strings2: string[] = ['Tokyo', 'Osaka', 'Nagoya'];
console.log({ strings });
console.log({ strings2 });

let nijigen: number[][] = [
  [50, 100],
  [150, 300],
];
console.log({ nijigen });

let arr: (string | number | boolean)[] = [1, false, 'Japan'];
console.log({ arr });
