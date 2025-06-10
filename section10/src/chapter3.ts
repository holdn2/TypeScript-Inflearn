/**
 * 조건부 타입 기반의 유틸리티 타입
 *
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;

// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never
// => string | never => string
type CustomExclude<T, U> = T extends U ? never : T;

type AA = CustomExclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;

// 1단계
// Extract<string, boolean> |
// Extract<boolean, boolean>

// 2단계
// never |
// boolean
// => never | boolean => boolean
type CustomExtract<T, U> = T extends U ? T : never;

type BB = CustomExtract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */
function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;

// T에 어떤 함수 타입이든 들어올 수 있도록. 함수 타입만 들어올 수 있음
type CustomReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type ReturnAA = CustomReturnType<typeof funcA>;

type ReturnBB = CustomReturnType<typeof funcB>;
