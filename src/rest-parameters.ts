export {};

const reducer = (accumulator: number, currentValue: number): number => {
  const sum = accumulator + currentValue;
  console.log({ accumulator, currentValue, sum });
  return sum;
};
[1, 2, 3, 4].reduce(reducer);

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // console.log(values);
  values.reduce(reducer);
  return 100;
};

sum(1, 2, 3, 4, 5);
