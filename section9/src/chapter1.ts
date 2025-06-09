/**
 * 분산적인 조건부 타입
 */
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 조건부 타입에 타입 변수로 유니온 타입이 들어가면 분산적인 조건부 타입이 되고 동작 방식이 바뀌게 된다.
// 유니온 타입을 넣으면 각각 한번씩 전달된다. 분리된 결과를 유니온으로 묶어준다.
let c: StringNumberSwitch<number | string>;
// let c: StringNumberSwitch<number>;
// let c: StringNumberSwitch<number>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

// 특정 유니온 타입에서 조건에 따라 특정 타입을 제거한 유니온 타입을 얻을 수 있다.
type Excluding<T, U> = T extends U ? never : T;

type AA = Excluding<number | string | boolean, string>;
// 1단계
// Excluding<number|string>
// Excluding<string|string>
// Excluding<boolean|string>
// 2단계
// number |
// never |
// boolean
// 결과
// number | never | boolean => number | boolean
// never는 공집합이기 때문에 유니온 하면 그냥 사라짐

type Extracting<T, U> = T extends U ? T : never;

type BB = Extracting<number | string | boolean, string>;
// 1단계
// Extracting<number|string>
// Extracting<string|string>
// Extracting<boolean|string>
// 2단계
// never |
// string |
// never
// 결과
// never | string | never => string

/**
 * 분산적인 조건부 타입이 되지 않도록 막고 싶다면
 * [ ] 를 이용해서 방지할 수 있다.
 */
type Example<T> = [T] extends [number] ? string : number;
