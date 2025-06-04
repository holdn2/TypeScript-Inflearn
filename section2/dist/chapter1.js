// 원시타입 : 동시에 하나의 값만 저장할 수 있는 타입. (number, string, boolean, null, undefined)
// number : 숫자를 뜻함. 모든 숫자 관련 타입. 해당 변수에는 숫자만 넣을 수 있음. 문자열 전용 메서드 사용 못함.
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity; // 양의 무한대
let num6 = -Infinity; // 음의 무한대
let num7 = NaN; // Not A Number
num2.toFixed();
// string : 문자열을 의미. 문자열만 넣을 수 있음. 문자열 전용 메서드만 사용가능.
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
str3.toUpperCase();
// boolean : 참과 거짓.
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// "strictNullChecks": false 를 설정하면 값을 설정하기 전에 잠시 null을 넣어줄 수 있다.
// let numA: number = null;
// 리터럴 타입 : 값 그자체가 타입이 됨.
// 리터럴 -> 값
let numA = 10;
// numA = 12; 이러면 에러가 생긴다.
let strA = "hello";
let boolA = true;
export {};
// boolA = false; 에러가 생김
