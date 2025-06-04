/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가. 업캐스팅은 가능
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입
a = b; // 업캐스팅이라서 가능
// b = a; 다운캐스팅이라서 불가능

//
// 기준2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때. 다운캐스팅은 가능. 반환값일 때랑 다름.
// 매개변수가 객체일 때를 생각해보자. 업캐스팅을 할 수 없다.
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};
// c = d; 업캐스팅이라서 불가능
d = c; // 다운캐스팅이라서 가능

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
// 업캐스팅이라서 안 된다.
// animalFunc=dogFunc; 아래와 같은 것이다. 매개변수의 타입은 원래 자신처럼 되고 본문은 dogFunc가 된다.
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// };
dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//
// 2-2. 매개변수의 개수가 다를 때
// 매개변수의 개수가 더 많은 쪽에 적은 쪽을 할당하는 것은 괜찮음.
// 단, 매개변수의 타입이 같아야 한다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;
let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
