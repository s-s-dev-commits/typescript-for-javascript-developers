export {};

const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

let sumUnknown;
// unknown型なので、文法エラーが出る
// sumUnknown = numberUnknown + 10;

console.log(typeof numberUnknown);
// タイプガード
// typeofで型をチェックしたら、足し算ができる
if (typeof numberUnknown === 'number') {
  sumUnknown = numberUnknown + 10;
}

console.log({ sumAny });
console.log({ sumUnknown });
