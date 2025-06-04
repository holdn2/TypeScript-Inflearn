// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
// 어떤 타입이든 해당 변수에 넣을 수 있음

let anyVar: any = 10;
anyVar = "hello";

// 또한 모든 타입의 변수에 any타입의 값을 넣을 수 있음
let num: number = 10;
num = anyVar;
// anyVar = () => {};

// 이렇게 모든 메서드들도 사용이 가능하다.
// anyVar.toFixed();
// anyVar.toUpperCase();
// any는 타입스크립트의 장점을 포기하는 것이다. 런타임 에러 발생 가능성이 높아진다.

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와는 다르게 모든 타입의 변수에 unknown 타입의 값을 넣을 수는 없음
// num = unknownVar;

// unknown 타입이면 아래와 같은 메서드들을 사용할 수 없다. 연산도 불가능하다.
// unknownVar.toUpperCase();
// unknownVar.toFixed();

// 값이 확정되지 않을 때는 any 보다는 unknown으로 하는 것이 조금 더 안정적이다.
