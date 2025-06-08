/**
 * 제네릭
 * 일반적인, 포괄적인
 */

// 제네릭 함수.
// T: 타입을 저장하는 변수. 타입 변수
// T에 할당되는 타입은 함수를 호출할 때의 인수에 따라 결정된다.
function func<T>(value: T): T {
  return value;
}

let num = func(10);
num.toFixed();
// num.toUpperCase();
let bool = func(true);
let str = func("string");

// 제네릭 함수를 호출할 때 명시적으로 타입 변수에 할당되는 타입을 정의할 수 있다.
// 1. 타입 단언
// 2. < > 사이에 명시적으로 타입을 정의한다.
let arr = func([1, 2, 3] as [number, number, number]);
let arr2 = func<number[]>([1, 2, 3]);
