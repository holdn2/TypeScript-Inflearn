/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
let a = () => 10; // number 타입
let b = () => 10; // number 리터럴 타입
a = b; // 업캐스팅이라서 가능
let c = (value) => { };
let d = (value) => { };
// c = d; 업캐스팅이라서 불가능
d = c; // 다운캐스팅이라서 가능
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc=dogFunc; 아래와 같은 것이다. 매개변수의 타입은 원래 자신처럼 되고 본문은 dogFunc가 된다.
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// };
dogFunc = animalFunc;
let testFunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
// func2 = func1;
