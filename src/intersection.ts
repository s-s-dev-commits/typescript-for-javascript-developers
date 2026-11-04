export {};

type Pitcher1 = {
  throwingSpeed: number;
};
const Kuroda: Pitcher1 = {
  throwingSpeed: 157,
};
console.log({ Kuroda });

type Batter1 = {
  battingAverage: number;
};
const Maeda: Batter1 = {
  // throwingSpeed: 150,
  battingAverage: 0.302,
};
console.log({ Maeda });

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };
// 型を組み合わせる
type TwoWayPlayer = Pitcher1 & Batter1;
const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.28,
};
console.log({ Otani });
