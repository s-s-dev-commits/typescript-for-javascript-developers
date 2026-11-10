export {};

// let profile: { name?: string } = {};
// profile.name = 'shingo';
// profile.age = 42;

// How to write index signetures
// { [ index: tyoeForIndex]: typeForValue }

let profile: { [index: string]: string | number } = {};
profile.name = 'shingo';
profile.age = 42;
profile.nationality = 'Japan';

interface Profile {
  name: string;
  underTyenty: boolean;
  [index: string]: string | number | boolean;
}

let profile2: Profile = { name: 'shingo', underTyenty: false };
// profile.name = 'shingo';
profile.age = 42;
profile.nationality = 'Japan';
