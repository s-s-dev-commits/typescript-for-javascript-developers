export {};

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(1.72, 77));

let bmi1: (height: number, weight: number) => number = (
  height: number,
  weight: number,
): number => {
  return weight / (height * height);
};

console.log(bmi1(1.72, 77));

// 1行なのでreturnがいらない
// Javaのstreamっぽい
let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number,
): number => weight / (height * height);

console.log(bmi2(1.72, 77));
