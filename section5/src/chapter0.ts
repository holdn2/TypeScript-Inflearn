/**
 * 인터페이스
 * 객체의 타입을 정의하는 데에 특화되어 있다.
 * 따라서 인터페이스를 정의할 때 유니온이나 인터섹션을 할 수 없다.
 * 이용해야 한다면 타입 별칭에 포함하거나 타입 주석에 직접 사용해야 한다.
 */
interface Person {
  readonly name: string;
  age?: number;
  sayHi?: () => void;
  sayHi2(): void; // 호출 시그니쳐로도 가능
  // 함수 오버로딩을 하려면 호출 시그니쳐 형식으로만 가능하다!!!
  sayHi2(a: number, b: number): void;
}

type Person2 = number | string | Person;

const person: Person | number = {
  name: "유찬영",
  age: 25,
  sayHi: function () {
    console.log("Hi");
  },
  sayHi2: () => {
    console.log("hi2");
  },
};
const person2: Person = {
  name: "유찬영",
  sayHi2: function () {
    console.log("HiHi");
  },
};
person2.sayHi2();
person2.sayHi2(1, 2);
