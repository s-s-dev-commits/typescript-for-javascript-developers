export {};

let bim: (height: number, weight: number) => number = (
  height: number,
  weight: number,
): number => weight / (height * height);

// console.log(bim(1.72));

// bim(身長, 体重, console.logで出力するかどうか)
// 1. bim(1.72, 77, true)
// 2. bim(1.72, 77, false)
// 3. bim(1.72, 77)
let bim1: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean,
): number => {
  const bmi: number = weight / (height * height);
  console.log({ printable });
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bim1(1.72, 77, false);
