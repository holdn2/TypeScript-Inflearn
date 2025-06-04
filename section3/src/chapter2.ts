// Unknown 타입
// 모든 타입의 슈퍼 타입(부모 타입)
// 전체 집합이라고 볼 수 있다.
// 모든 값을 넣을 수 있음 === 업캐스팅은 모두 허용됨
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // 아래처럼 다운캐스팅은 할 수 없음
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
}

// Never 타입
// 모든 타입의 서브 타입(자식 타입)
// 모든 집합의 부분 집합이 될 수 있다. === 공집합
function neverExam() {
  // 반환할 수 있는 값이 아무것도 없다. 라는 뜻
  function neverFunc(): never {
    while (true) {}
  }

  // 모든 변수에 never 타입을 업캐스팅할 수 있음
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 어떤 값도 저장할 수 없다. ==> 저장하려고 하면 그것이 다운캐스팅
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

// Void 타입
// undefined 타입의 슈퍼 타입
function voidExam() {
  // 리턴문이 없는 함수에 반환값 타입을 명시하는 데에 사용
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any 타입 : 치트키
// 모든 타입의 슈퍼타입이자 서브타입(never 제외)
// 업캐스팅, 다운캐스팅 모두 가능
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // 아래처럼 never에 any를 다운캐스팅하여 넣을 수 없음
  //   neverVar = anyVar;
}
