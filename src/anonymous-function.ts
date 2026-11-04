export {};

let bmi = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(1.72, 77));

// bmiの型もアノテーションした場合
let bmi1: (height: number, weight: number) => number = function (
  height: number,
  weight: number,
): number {
  return weight / (height * height);
};

console.log(bmi1(1.72, 77));
