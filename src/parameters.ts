export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};
debugProfile('shingo', 42);

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ['gollila', 1];
debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
