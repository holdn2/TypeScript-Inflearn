// 기본 타입 간의 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
// number 리터럴 타입은 number의 서브 타입이므로 아래의 경우 다운캐스팅이라서 에러가 난다.
// num2=num1;

// 객체 타입 간의 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 되는가?
type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};
let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};
// Animal이 Dog의 슈퍼 타입으로 취급된다. 따라서 아래의 경우는 다운캐스팅으로 취급되어 에러가 난다.
// 객체 간 관계는 property를 기준으로 정해진다. 조건이 적을 수록 슈퍼 타입
animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "프로그래밍 책",
  price: 33000,
  skill: "react",
};
book = programmingBook;
// programmingBook = book;

// 초과 property 검사. 초기화하는 변수로 **객체 리터럴**을 사용한다면 초과 property를 막도록 하여 에러가 발생한다.
let book2: Book = {
  name: "프로그래밍 책",
  price: 33000,
  // skill: "react",
};
let book3: Book = programmingBook;
