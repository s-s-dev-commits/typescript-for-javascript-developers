export {};

type Profile = {
  name?: string;
  age: number;
  zipCode: number;
};

// プロパティが増減したときに、optionalな設定をするのが大変
// type Profile2 = {
//   name?: string;
//   age?: number;
// };

// Partilで宣言すると、プロパティがoptionalな型になる
type PartialType = Partial<Profile>;

// Requiredで宣言すると、プロパティが必須な型になる
type RequiredType = Required<Profile>;
