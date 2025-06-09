/**
 * 조건부 타입
 * 삼항 연산자를 이용해서 조건에 따라 타입을 결정하는 문법
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjB가 ObjA 의 서브 타입이므로 true
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
let result = removeSpaces("hi im uchan0");
result.toUpperCase();
let result2 = removeSpaces(undefined);
