/**
 * 인터페이스의 확장(extends)
 */

interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  name: "hello";
  isScratch: boolean;
}
interface Chicken extends Animal {
  //   name: number;
  isFly: boolean;
}

const dog: Dog = {
  name: "",
  age: 0,
  isBark: true,
};
const cat: Cat = {
  name: "hello",
  age: 0,
  isScratch: true,
};

interface DogChicken extends Dog, Chicken {}

const dogChicken: DogChicken = {
  name: "",
  age: 0,
  isBark: true,
  isFly: false,
};
