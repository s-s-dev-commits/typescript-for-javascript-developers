export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 除外
type FunctionType = Exclude<SomeTypes, string | number>;

// 抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// nullabel
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

// Excludeの処理概要
type MyExclude =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);
type MyFunctionType = MyExclude;
