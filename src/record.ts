export {};

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';
type Info = {
  name: string;
  case: number;
};

const Japan: {
  Tokyo: Info;
  Chiba: Info;
  Tottori: Info;
  Shiga: Info;
} = {
  Tokyo: { name: '東京', case: 1960 },
  Chiba: { name: '千葉', case: 249 },
  Tottori: { name: '鳥取', case: 2 },
  Shiga: { name: '滋賀', case: 10 },
};

// Record<K, T>
const Japan2: Record<Prefectures, Info> = {
  Tokyo: { name: '東京', case: 1960 },
  Chiba: { name: '千葉', case: 249 },
  Tottori: { name: '鳥取', case: 2 },
  // Shiga: { name: '滋賀', case: true },
};
