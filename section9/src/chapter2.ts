/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

// 리턴타입을 가져오는 것
// infer는 조건식을 참으로 만들 수 있는 R 타입이 있다면 그 타입을 반환한다.
// 추론이 불가할 때는 조건식을 거짓으로 판단한다.
type ReturnTypes<T> = T extends () => infer R ? R : never;

type D = ReturnTypes<FuncA>;

type E = ReturnTypes<FuncB>;

type C = ReturnTypes<number>;

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string
