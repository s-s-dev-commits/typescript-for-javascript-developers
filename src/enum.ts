export {};

enum Months {
  // January,
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months.January);
console.log(Months.August);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  BLACK = '#000000',
}
let blue = COLORS.BLUE;
console.log({ blue });
let yellow = COLORS.YELLOW;
enum COLORS {
  YELLOW = '#FFFF00',
}
console.log({ yellow });

// Javascriptの場合
// const MonthsJs = {
//   January: 0,
//   February: 1,
//   March: 2,
//   April: 3,
//   May: 4,
//   June: 5,
//   July: 6,
//   August: 7,
//   September: 8,
//   October: 9,
//   November: 10,
//   December: 11,
// };
// console.log(MonthsJs.January);
// console.log(MonthsJs.August);
// console.log(MonthsJs.December);
