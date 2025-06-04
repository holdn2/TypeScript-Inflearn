/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * 중요한 부분
 * 태그를 붙여서 객체 간 구분을 완벽히 한다.
 */

type Admin = {
  tag: "ADMIN"; // string 리터럴 타입으로 태그를 만든다.
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point}포인트 모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

// tag라는 property를 추가하여 서로소 집합의 관계로 바꿔줄 수 있다.
function login2(user: User) {
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

function login3(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
  }
}

/**
 * 복습 겸 한가지 추가 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = { state: "LOADING" };

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log("실패 : ", task.error.message);
      break;
    case "SUCCESS":
      console.log("성공 : ", task.response.data);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
