/**
 * 접근 제어자
 * access modifier
 * => public / private / protected
 * 기본이 public이고 아무 제한이 없다는 뜻
 * private은 클래스 내부에서만 접근할 수 있다. 상속받은 클래스도 접근할 수 없다.
 * protected는 외부에서는 접근할 수 없지만 파생 클래스에서는 접근 가능하다.
 */

class Employee {
  // 필드
  //   private name: string;
  //   protected age: number;
  //   position: string;

  // 생성자
  // 생성자에 접근 제어자를 달아주게 되면 필드 정의를 생략해야 한다.
  // 초기화도 자동으로 한다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }

  setName(name: string) {
    this.name = name;
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

  // 메서드
  func() {
    // private으로 설정하면 상속받은 클래스에서도 접근이 불가하다.
    // this.name;
    // protected로 설정하면 파생 클래스에서 접근 가능하다.
    console.log(this.age);
  }
}

const employee = new Employee("유찬영", 25, "developer");
employee.setName("홍길동");
// employee.age = 12;
employee.position = "디자이너";

console.log(employee);
