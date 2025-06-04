// 타입 추론

// 타입을 일일히 정의하지 않아도 자동으로 타입스트립트가 타입 추론을 통해 변수의 타입을 추론한다.

// 일반적으로 변수를 선언하고 초기화하는 상황에서는 자동으로 타입을 잘 추론한다.
// 초기값을 기준으로 타입을 추론한다.
let a = 10;
let b = "hello";

let c = {
  id: 1,
  name: "ㅁㄴㅇㄹ",
  profile: {
    nickname: "asdf",
  },
  urls: ["https://ts.winterlood.com/69607da2-4cca-4b89-b808-f78bb7040c80"],
};
let { id, name, profile, urls } = c;

let [one, two, three] = [1, "string", true];

// 함수의 반환값 타입을 추론할 때는 return 뒤에 오는 값으로 추론한다.
function func() {
  return "hello";
}
// 함수의 매개변수에 기본값이 있다면 매개변수의 타입도 자동으로 추론해준다.
function func2(message = "기본값") {
  return "hello";
}

// 암묵적 any 타입의 진화. 해당 상황은 추천되지 않는다.
// 변수를 선언하고 초기값을 지정하지 않는다면 암묵적 any타입으로 추론된다.
// 이 때는 변수에 어떤 값을 넣어주는지에 따라 해당 값으로 진화한다.
let d;
d = 10;
d.toFixed();
d = "asdf";
d.toUpperCase();
// d.toFixed();

// 명시적으로 any 타입을 선언하면
// 진화없이 어디서든 any 타입이다.
let d2: any;
d2 = 10;
d2.toFixed();
d2 = "asdf";
d2.toUpperCase();
d2.toFixed();

// const를 선언하면 리터럴 타입으로 추론된다.
// 상수이므로 다른 값으로 변하지 못하기 때문이다.
const num = 10;
const str = "hello";

// 아래의 상황에서는 Union타입으로 추론된다.
let arr = [1, "string"];

// 타입스크립트는 타입을 추론할 때 타입을 최대한 범용적으로 사용할 수 있도록 추론한다.(타입 넓히기)
