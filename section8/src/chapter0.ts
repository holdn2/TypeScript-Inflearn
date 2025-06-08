/**
 * 인덱스드 엑세스 타입
 * 객체 / 배열 / 튜플
 * 세가지 모두 사용 가능
 */

// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "본문",
  author: {
    id: 1,
    name: "유찬영",
  },
};

printAuthorInfo(post.author);
