/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legayPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

type CustomPick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumbnailURL"
  // "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL"
  [key in K]: T[key];
};

const customLegayPost: CustomPick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">
// Pick<Post, "content" | "tags" | "thumbnailURL">
const customNoTitlePost: CustomOmit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 */
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;

type CustomRecord<K extends keyof any, V> = {
  [key in K]: V;
};

type CustomThumbnail = CustomRecord<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;
