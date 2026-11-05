export {};

class Mahoutsukai {}
class Souryo {}

// 多重継承はNG
// class Taro extends Mahoutsukai, Souryo{}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

// 多重実装はOK
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('イオナズンじゃ！');
  }
  kougeki(): void {
    console.log('会心の一撃じゃ！');
  }
}

let jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
