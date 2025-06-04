// enum 타입 : 열거형 타입
// 여러가지 값들에 각각 이름을 부여하여 열거해두고 사용하는 타입
// 안정적으로 관리할 수 있음.

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
// enum Role {
//   ADMIN, 자동으로 0이 할당됨
//   USER, 자동으로 1
//   GUEST, 2
// }
enum Role {
  ADMIN = 10,
  USER, // 11. 자동으로 할당됨
  GUEST, // 12
}

enum Language {
  korea = "ko",
  english = "en",
}

const user1 = {
  name: "유찬영",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korea,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.english,
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
