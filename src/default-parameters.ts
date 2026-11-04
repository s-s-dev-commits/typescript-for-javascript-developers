export {};

let nextYearSalary: (currentSalary: number, rate?: number) => number = (
  currentSalary: number,
  rate: number = 1.2,
): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.1));
console.log(nextYearSalary(1000));
