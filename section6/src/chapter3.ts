/**
 * 인터페이스와 클래스
 */
interface CharaterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharaterInterface {
  // 필드

  // 생성자
  // !! 인터페이스로 정의하는 필드들은 무조건 public이다.
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
