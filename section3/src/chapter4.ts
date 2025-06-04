// 대수 타입
// -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = 2;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;
// Dog에 포함된 객체
let union1: Union1 = {
  name: "",
  color: "",
};
// Person에 포함된 객체
let union2: Union1 = {
  name: "",
  language: "",
};
// Dog와 Person의 교집합에 있는 객체
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
// Dog, Person 어디에도 포함되지 않음. 즉, Union1 타입에 포함되지 않는다.
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 타입 - Intersection 타입
// 기본 타입들에 Intersection 타입에 적용하면 대부분 never 타입이 된다.
let variable: number & string;

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};

// Intersection은 기본 타입 보다 보통 객체 타입에 적용한다.
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
