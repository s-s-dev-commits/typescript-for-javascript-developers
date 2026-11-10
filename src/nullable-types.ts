export {};

// let profile: { name: string; age: number } = {
//   name: 'shingo',
//   age: null,
// };
// profile = null;

// null許容の型を作るとき、union型アノテーションにする
let profile2: { name: string; age: number | null } = {
  name: 'shingo',
  age: null,
};
