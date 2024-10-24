// interface Person {
//   name: string;
//   age?: number;
//   sayHi?: () => void;
// }

// const person: Person = {
//   name: "taehwan",
//   sayHi: () => {
//     console.log("hi");
//   },
// };

// const person1: Person = {
//   name: "Park",
//   age: 20,
// };

// type Type1 = number | string;
// type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// }

// type Type3 = number | string | Person;

// const person: Type3 = {
//   name: "Taehwan",
//   age: 20,
// };

// interface Animal {
//   name: string;
//   age: number;
// }

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
  breed: string;
}

const dog: DogCat = {
  name: "뽀삐",
  age: 20,
  isBark: true,
  isScratch: true,
  breed: "혼종",
};

console.log(dog);

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }
// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }
// interface chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
