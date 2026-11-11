export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};
// 型から必要なプロパティのみ取得
type SimpeleProfile = Pick<DetailProfile, 'name' | 'weight'>;
// 型から不要なプロパティを除外
type SmallProfile = Omit<DetailProfile, 'height'>;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// ↓
type MyOmit = Pick<DetailProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
