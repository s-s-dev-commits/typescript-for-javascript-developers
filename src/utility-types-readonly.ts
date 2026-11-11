export {};

type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: 'shingo',
  age: 42,
};
me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'noriko',
  age: 43,
};
// friend.age++;

type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriProfile = Yomitori<Profile>;
const friend2: YomitoriProfile = {
  name: 'X',
  age: 50,
};
// friend2.age++;
