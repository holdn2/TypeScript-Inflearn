/**
 * 선언 합침
 * 인터페이스는 동일한 이름으로 중복 선언이 된다.
 * 이 때는 모두 합쳐진다.
 * 동일한 프로퍼티를 중복되도록 선언한다면 동일한 타입으로 정의해줘야 한다.
 */

interface Person {
  name: string;
}
interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 0,
};

/**
 * 인터페이스는 '모듈 보강'을 할 때 사용한다.
 */
// 이미 선언되어있는 인터페이스
interface Lib {
  a: number;
  b: number;
}

// 프로퍼티를 추가해주고 싶을 때 모듈 보강을 해준다.
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
