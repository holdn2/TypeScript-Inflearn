// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "ycy"];
// <> : 제네릭 문법으로도 가능하다.
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]; // 두 개의 요소를 가진 number 배열
// tup1 = [2, 3, 4];
// typ1 = ["2", 3];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플도 배열. 배열 메서드를 사용할 수 있기 때문에 조심해야한다. 길이가 고정되어 있는데도 이것을 에러로 잡아주지 않음
// tup1.push(1);
// tup1.pop();
// tup1.pop();
// tup1.pop();

const users: [string, number][] = [
  ["김씨", 1],
  ["이씨", 2],
  ["박씨", 3],
  ["최씨", 4],
  //   [5, "오류"], 이렇게 순서를 바꾸면 오류가 발생한다.
];
