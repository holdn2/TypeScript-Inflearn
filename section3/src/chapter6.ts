// 타입 단언(type assertion)
// 선언을 미리 해두고 나중에 값을 초기화해주고 싶을 때 사용한다.

type Person = {
  name: string;
  age: number;
};
// as 키워드를 통해 타입 단언을 할 수 있다.
// as 뒤에 오는 타입으로 타입 추론이 된다.
let person = {} as Person;
person.name = "이름";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};
// 객체 리터럴을 사용할 때에도 타입 단언을 이용할 수 있다.
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 -> 단언식
// A as B일 때
// A가 B의 슈퍼 타입이거나 서브 타입이어야 한다.
let num1 = 10 as never;
let num2 = 10 as unknown;

// 서로소 관계에서는 타입 단언을 사용할 수 없다.
// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 중간에 unknown을 넣어서 다중 단언을 하면 가능하긴 하다. 좋은 방법은 아니니 어쩔 수 없을 때만 사용하기.

//
// const 단언
let num4 = 10 as const; // -> const로 선언한 것과 동일한 효과
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// cat.name = "";

//
// Non Null 단언.
// ! 연산자를 옵셔널 체이닝의 ? 연산자와 동일하게 사용한다.
// 값이 Null이거나 undefined가 아닐 것이라고 TS 컴파일러가 믿도록 한다. 조금 위험한 문법이다.
type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: "게시글1",
  author: "exam",
};
const len: number = post.author!.length;
