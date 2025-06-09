/**
 * 인덱스드 엑세스 타입
 * 객체 / 배열 / 튜플
 * 세가지 모두 사용 가능
 * 인덱스로 들어갈 수 있는 것은 무조건 타입이어야 한다. 변수가 들어갈 수는 없음
 * 복잡하고 큰 타입으로부터 필요한 만큼만 타입을 추출할 수 있다.
 */

/**
 * 객체
 */
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 중첩으로도 접근 가능
function printAuthorId(authorId: Post["author"]["id"]) {
  console.log(`${authorId}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "본문",
  author: {
    id: 1,
    name: "유찬영",
    age: 25,
  },
};

printAuthorInfo(post.author);

/**
 * 배열
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 배열 타입으로부터 하나의 요소의 타입만 가져온다. 아무 숫자를 넣어줘도 된다.
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "본문",
  author: {
    id: 1,
    name: "유찬영",
    age: 25,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

/**
 * 튜플
 */
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; //boolean

// type Tup3 = Tup[3]; 없는 것은 당연히 에러

type TupNum = Tup[number]; // 튜플 타입 안의 최적의 유니온 타입
