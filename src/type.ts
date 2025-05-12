export type Itteratee = string | ((val: any) => any)

export type Predicate = any[] | ((val: any) => any) | ObjectType<any> | string | undefined

export type AnyFunction = (...arg: any[]) => any
export type Func<T extends [], U> = (...arg: T) => U
export type AnyAsyncFunction = (...args: any[]) => Promise<any>
export type AsyncFunc<T extends [], U> = (...arg: T) => Promise<U>

export type NoParamFn<Result> = () => Result
export type OneParamFn<Param, Result> = (value: Param) => Result

export type ObjectType<Value = unknown> = Record<string, Value>
export type MapType<Value = unknown> = Map<string | number, Value>
export type SetType<Value = unknown> = Set<Value>


/**
 * @title 数字类型类
 * @description 
 * @supported 数字 | 数字字符串 | 带有其他字符的数字字符串
 */
export type NumberLike = number | `${number}` | string