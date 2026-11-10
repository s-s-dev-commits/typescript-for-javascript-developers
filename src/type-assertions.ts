export {};

let name: any = 'shingo';
let length: number = name.length;
// 型指定しないとき、anyのまま
// length = 'foo';

let name2: any = 'shingo';
let length2 = name2.length as number;

let name3: any = 'shingo';
let length3 = (name3 as string).length;

// jsxで推奨されていない(タグと同じものを使っている)ので、"as 型"がよい
let name4: any = 'shingo';
let length4 = (<string>name4).length;
