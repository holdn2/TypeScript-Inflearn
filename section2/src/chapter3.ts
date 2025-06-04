// 객체
let user: object = {
  id: 1,
  name: "유찬영",
};
// object로 지정하면 아래의 코드가 에러가 난다. object로 지정하면 안의 정보를 알려주지 않기 때문에
// user.id;

// 따라서 객체 리터럴 타입을 이용해야 한다.
let user1: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "유찬영",
};
user1.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// 타입스크립트는 구조를 기준으로 타입을 정의한다. 따라서 구조적 타입 시스템이라고 부른다.
// => Property Based Type System  <-> 명목적 타입 시스템

// ?를 통해서 선택적(optional) property로 만들어준다.
user1 = {
  name: "홍길동",
};

// readonly 를 통해 읽기 전용 속성으로 만들어서 값을 못바꾸게 할 수 있다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
