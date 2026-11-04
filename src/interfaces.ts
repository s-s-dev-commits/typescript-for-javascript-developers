export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: {
  name: string;
  age: number;
} = {
  name: 'shingo',
  age: 42,
};

let object2: ObjectType = {
  name: 'shingo',
  age: 42,
};

let object3: ObjectInterface = {
  name: 'shingo',
  age: 42,
};
