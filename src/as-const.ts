export {};

let name = 'shing0';
name = 'gollila';

// 定数化
let nickname = 'shima' as const;
// nickname = 'shima-chan';

let profile = {
  name: 'shingo',
  height: 172,
};
profile.name = 'gollila';
profile.height = 175;

// readonly化
let profile2 = {
  name: 'shingo',
  height: 172,
} as const;
// profile2.name = 'gollila';
// profile2.height = 175;
