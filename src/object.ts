export {};

let profile1: object = { name: 'shingo' };
console.log({ profile1 });
profile1 = { birthYear: 1983 };
console.log({ profile1 });

let profile2: {} = { name: 'shingo' };
console.log({ profile2 });
profile2 = { birthYear: 1983 };
console.log({ profile2 });

let profile3: {
  name: string;
} = { name: 'shingo' };
console.log({ profile3 });
// profile3 = { birthYear: 1983 };
// console.log({ profile3 });
profile3 = { name: 'noriko' };
console.log({ profile3 });
