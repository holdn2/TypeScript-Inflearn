/**
 * 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["2", "4"],
};

/**
 * 인덱스 시그니쳐
 */
interface NumberMap {
  [key: string]: number;
}
let numberMap: NumberMap = {
  key: -123,
  key2: 141,
};
interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "123",
  asd: "gakds",
};
let booleanMap: Map<boolean> = {
  key: true,
  key2: false,
};

/**
 * 제네릭 타입 별칭
 * 제네릭 인터페이스와 문법만 다르지 거의 비슷함
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */
interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  //   if (user.profile.type !== "student") {
  //     console.log("잘 못 오셨습니다.");
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "유찬영",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "건국대",
  },
};

// goToSchool(developerUser);
goToSchool(studentUser);
