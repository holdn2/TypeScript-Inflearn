/**
 * keyof 연산자
 * 객체 타입에 적용하는 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person; // 타입 별칭에 정의할 때도 typeof 연산자 사용할 수 있다.

// 여기서 keyof Perosn은 Person 객체의 모든 프로퍼티의 유니온 타입으로 추출한다.
// 뒤에 타입이 와야 한다.
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

// 위와 동일한 것
function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "유찬영",
  age: 25,
};

getPropertyKey(person, "name"); // 유찬영
