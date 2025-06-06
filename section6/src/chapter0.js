/**
 * 클래스
 */

let studentA = {
  name: "유찬영",
  grade: "A+",
  age: 25,
  study() {
    console.log("열심히 공부하기");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자. 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부하기");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

// 상속
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍하기`);
  }
}

// 클래스를 이용해서 만든 객체 => 인스턴스
// student 인스턴스
let studentB = new Student("유찬영", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper("유찬영", "B+", 25, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
