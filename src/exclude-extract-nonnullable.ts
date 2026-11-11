export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 除外
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// 関数の型アノテーションを除外
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// 抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

// 関数の型アノテーションを抽出
type TypeExtractingFunction = Extract<SomeTypes, Function>;

// nullabel
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
