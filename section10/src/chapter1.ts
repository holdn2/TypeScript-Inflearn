/**
 * 맵드 타입 기반의 유틸리티 타입들
 *
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줘는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
// 기본 유틸리티 타입 Partial
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};
// 직접 구현한 Partial
type CustomPartial<T> = {
  [key in keyof T]?: T[key];
};

const customDraft: CustomPartial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const withThumbnailPost: Required<Post> = {
  title: "ts 후기",
  tags: ["ts"],
  content: "",
  //   thumbnailURL: "https://...",
  thumbnailURL: "https://...",
};

// 직접 구현한 Required
// ? 앞에 - 를 붙이면 ?가 붙은 프로퍼티에서 ?를 빼겠다는 뜻
type CustomRequired<T> = {
  [key in keyof T]-?: T[key];
};

const customWithThumbnailPost: CustomRequired<Post> = {
  title: "ts 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * -> 읽기 전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */
const readonlyPost: Readonly<Post> = {
  title: "ts 후기",
  tags: ["ts"],
  content: "",
};
// readonlyPost.content = "test";

type CustomReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

const customReadonlyPost: Readonly<Post> = {
  title: "ts 후기",
  tags: ["ts"],
  content: "",
};

// customReadonlyPost.title = "test";
