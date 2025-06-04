// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUppderCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  //   value.toFixed();
  //   value.toUpperCase();

  // 타입을 좁힐 수 있게 도와주는 '타입 가드'라고 한다.
  // 타입 가드 3가지 : typeof / instanceof / in
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // null 같은 다른 object일 때는 typeof value === "object" 로 사용할 수 없음. instanceof 연산자 사용하기.
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // Person은 클래스가 아니기 때문에 instanceof 연산자 뒤에 사용할 수 없음.
  //   else if(value instanceof Person){
  //   }
  // in 연산자 뒤에는 null이나 undefined가 들어오면 안 된다.
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
