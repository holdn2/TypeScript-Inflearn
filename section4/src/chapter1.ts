/**
 * 함수 타입 표현식
 */

// 타입 별칭을 사용하여 함수의 타입을 별도로 정의할 수 있다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: (a: number, b: number) => number = (a, b) => a / b; // 이렇게 할 수도 있음. 위와 같은 거임

/**
 * 호출 시그니쳐(콜 시그니쳐). 함수 타입 표현식과 동일한 기능을 함
 */
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 이렇게 추가 프로퍼티를 넣을 수 있음
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
// 추가 프로퍼티
add2.name;
