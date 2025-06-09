/**
 * 맵드 타입(Mapped Type)
 * 객체 타입을 조작하는 기능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

type PartialUser2 = {
  [key in keyof User]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ~~~ 기능
  return {
    id: 1,
    name: "유찬영",
    age: 25,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ~~~ 기능
}

// 필요한 것만 넣어도 오류가 나지 않도록
updateUser({
  //   id: 1,
  //   name: "유찬영",
  age: 24,
});
