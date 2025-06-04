// void : 공허
// 아무것도 없다 라는 뜻

function func1(): string {
  return "hello";
}

// 반환값이 없는 함수의 반환값을 정의할 때, void로 정의해준다.
function func2(): void {
  console.log("hello");
}

// void타입으로 정의한 변수에는 undefined만 담을 수 있음.
let a: void;
// a = 2;
// a = "asdf";
a = undefined;

// never : 존재하지 않는, 불가능한 타입
// 정상적으로 종료될 수 없어서 함수의 반환값이 있는 것 자체가 모순일 때 never를 반환값으로 정의한다.
function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}
// never는 어떠한 값도 담을 수 없음. 어떤 방식으로도 담을 수 없음.
