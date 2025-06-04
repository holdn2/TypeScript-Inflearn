/**
 * 사용자 정의 타입 가드
 */
// 직접 타입을 수정할 수 없어서 태그를 추가로 넣을 수 없을 때(서로소 유니온으로 못 만들 때)

type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 사용자 정의 타입 가드
// isDog라는 함수의 반환값이 true면 매개변수로 전달한 animal이 Dog 타입이라고 한다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else {
    animal;
  }
}
