function Book(title, pages, done = false) {
  // field
  this.title = title;
  this.pages = pages;
  this.done = done;
  // Method
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);
console.log(book1);

// 1) 생성자 함수를 선언하면 => 프로토타입의 객체가 생성이 된다.
// 2) 변수를 선언 && 생성자 함수를 호출 및 할당하는 순간
// 3) 생성자 함수가 가지고 있던 프로토타입 객체 활성 => 해당 변수, 인스턴스 객체
// 4) 해당변수의 복사본인 인스턴스 객체가 생성

// 객체지향 프로그래밍언어
// 정확하게는 객체지향 프로토타입 기반의 프로그래밍 언어

// 반드시 Method 함수밖에 들어갈 수 없다.
class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done = false ? (str = "읽는중") : (str = "완독");
    return str;
  }
}
