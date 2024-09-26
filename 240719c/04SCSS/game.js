//끝말잇기 게임

//1. 제시어의 끝 단어를 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함
// 1-2. 3-1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야 함

//2. 끝 단어로 시작하는 단어를 입력
// 2-1. 사용자가 입력한 단어가 무엇인지 파악
// 2-2. 끝단어로 시작하는 단어 === 제시어의 끝 단어

//3. 단어 입력 후 입력버튼 클릭
// 3-1. 입력버튼 클릭 후 두 단어 검증(이벤트)

// 4. 문제 여부 판단 => 문제가 없다 or 문제가 있다
// 4-1. 조건에 따라서 값을 어떻게 출력할지

// const button = document.querySelector(".search");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// wordGame
const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  const result = document.querySelector(".word_result");
  if (lastword === firstword) {
    result.innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    result.innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
};
const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

// lottoGame
// 1부터 45까지의 6개의 숫자가 중복 없이 랜덤으로 동시에 추출이 되어야 함

// 1. 클릭 버튼이 무엇인지 컴퓨터에게 알려줘야 함

// 2. 클릭! 버튼 클릭 시, 숫자가 생성되어야 함(이벤트/트리거 역할)

// 3. js > 내장 객체 중 숫자를 랜덤으로 생성해주는 함수
// 3-1. rendom() => 0~1 미만의 실수 & 난수 생성
// (*실수: 소수점을 가지고 있는 숫자)
// (*난수: 불규칙적으로 숫자를 생성하는 행위)
// 소수점을 없애야 함: floor() => 소수점을 버림 / ceil() => 소수점을 올림
//                 round() => 반올림

// 4. 중복x
// 4-1. set() 클래스 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정
//  =>중복된 값이 생성되는 경우, 1개로 합쳐주는 역할
// 4-2. 6개의 숫자 완성 => 2번째 & 4번째 숫자가 같은 경우 5개가 됨
// 조건문 => 재추첨을 하겠습니다!
const lottoBtn = document.querySelector(".wrapper_lotto_btn");
const lottoResult = document.querySelector(".game_lotto_num");

const luckyNum = {
  digitCount: 6,
  maxNum: 44,
};

const startLotto = () => {
  const { digitCount, maxNum } = luckyNum; //구조 분해 할당
  let myNum = new Set(); //클라스 객체
  for (let i = 0; i < digitCount; i++) {
    myNum.add(Math.floor(Math.random() * maxNum) + 1);
  }
  if (myNum.size === 6) {
    lottoResult.innerText = `${[...myNum]}`;
  } else {
    lottoResult.innerText = "재추첨 하겠습니다!";
  }
};

lottoBtn.addEventListener("click", startLotto);
