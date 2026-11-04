export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'shingo',
  age: 42,
};

// example1の型推測からコピーして、型エイリアスを作成
// example1が修正された時に、追従できない
type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'shingo',
  age: 42,
};

// example1の実際の型から型エイリアスを作成
// example1が修正された時も、追従できる
type Profile2 = typeof example1;
