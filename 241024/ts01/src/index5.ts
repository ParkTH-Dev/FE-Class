class Student {
  // 필드 => 인스턴스 객체의 키 역할
  // public name;
  // private age;
  // protected grade;
  //생성자 함수 => 필드에 매칭되어질 값을 찾아오는 역할
  constructor(
    private name: string,
    protected age: number,
    public grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  //메서드 함수
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log("안녕하세요");
  }
}

const studentB = new Student("Taehwan", 20, 2);
console.log(studentB);
console.log(studentB.introduce());

class StudentDeveloper extends Student {
  favoritSkill;

  constructor(name: string, age: number, grade: number, favoritSkill: string) {
    super(name, age, grade);
    this.favoritSkill = favoritSkill;
  }

  func() {
    this.age;
  }

  programing() {
    console.log(`${this.favoritSkill}로 프로그래밍 합니다.!`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 20, 2, "react");
console.log(studentC);
