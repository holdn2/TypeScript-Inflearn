/**
 * 프로미스
 */
// 비동기 처리의 결과값의 타입을 정해줄 수는 있지만 실패했을 때의 타입을 정해줄 수는 없다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}
// function fetchPost() {
//   return new Promise<Post>(() => {
//     setTimeout((resolve: any, reject: any) => {
//       resolve({
//         id: 1,
//         title: "게시글 제목",
//         content: "게시글 컨텐츠",
//       });
//     }, 3000);
//   });
// }
// const postRequest = fetchPost();
// postRequest.then((post) => {
//   post.id;
// });

function fetchPost(): Promise<Post> {
  return new Promise(() => {
    setTimeout((resolve: any, reject: any) => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}
const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
