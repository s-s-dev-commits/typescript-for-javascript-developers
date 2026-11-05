export {};

class VisaCard {
  // readonly owner: string;

  // publicは書かなくていいけど、readonlyのみのとき、readonlyを削除したら、メンバ変数の宣言までなくなる
  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let card = new VisaCard('shingo');
console.log(card.owner);
// readonlyなので代入できない
// card.owner = 'しんご';
// console.log({ card });
