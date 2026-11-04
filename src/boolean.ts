// export {};

// tsconfig.json
// "moduleDetection": "force",
// 上記設定のため、このファイルでモジュール化される
// export {};がなくても、グローバル変数にあるnameと衝突しない
let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
