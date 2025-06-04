// 원시타입 : 동시에 하나의 값만 저장할 수 있는 타입. (number, string, boolean, null, undefined)
// number : 숫자를 뜻함. 모든 숫자 관련 타입. 해당 변수에는 숫자만 넣을 수 있음. 문자열 전용 메서드 사용 못함.
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity; // 양의 무한대
let num6: number = -Infinity; // 음의 무한대
let num7: number = NaN; // Not A Number
num2.toFixed();

// string : 문자열을 의미. 문자열만 넣을 수 있음. 문자열 전용 메서드만 사용가능.
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;
str3.toUpperCase();

// boolean : 참과 거짓.
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// "strictNullChecks": false 를 설정하면 값을 설정하기 전에 잠시 null을 넣어줄 수 있다.
// let numA: number = null;

// 리터럴 타입 : 값 그자체가 타입이 됨.
// 리터럴 -> 값
let numA: 10 = 10;
// numA = 12; 이러면 에러가 생긴다.
let strA: "hello" = "hello";
let boolA: true = true;
// boolA = false; 에러가 생김
