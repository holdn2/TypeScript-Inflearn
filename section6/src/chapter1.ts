/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "유찬영",
  age: 25,
  position: "developer",
  work() {
    console.log("일함");
  },
};

// 클래스는 타입으로도 활용된다.
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("유찬영", 25, "개발자");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: "유찬영2",
  age: 0,
  position: "",
  work() {},
};
