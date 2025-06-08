/**
 * 첫 번째 사례
 * 타입 변수를 여러 개 선언해서 사용할 수 있다.
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "afsd");

/**
 * 두 번째 사례
 */
// 첫 번째 인덱스 말고는 타입 알 필요 없을 때 나머지 매개변수를 사용하여 튜플 형식으로 표현한다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]); // 1
let str = returnFirstValue(["hello", "myname"]); // "hello"
let numStr = returnFirstValue([1, "2", 3]); // 1

/**
 * 세 번째 사례
 * T의 타입을 제한하기
 * extends 를 이용해 조건 걸기
 */
// number 타입의 length를 가지고 있는 객체를 확장(상속)
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10

// 아래는 length 프로퍼티가 없기 때문에 허용되지 않는다.
// let var4 = getLength(10);
