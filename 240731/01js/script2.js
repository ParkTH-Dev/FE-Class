// 아래 id 및 pw 는 a 사용자의 id & pw 입니다
const id = "ezen";
const pw = 1234;
// 1. 사용자로부터 아이디 및 페스워드 정보값을 순차적으로 받습니다.
// 2. 사용자가 입력한 id 값이 일치하면 pw를 받을 수 있는 단계로 넘어가고, 일치하지 않으면 일치하지 않는다는 알림창을 띄운다.
// 3. 사용자가 pw값을 입력하는 단계에 도착해서 역시, pw가 일치하면 사용자님 반갑습니다.라는 알림창이 나타나게 / 아니라면 pw가 일치하지 않습니다 라는 알림창을 띄운다.

const userId = prompt("아이디를 입력해주세요.");
location.reload();
if (userId === id) {
  const userPw = Number(prompt("비밀번호를 입력해주세요."));
  if (userPw === pw) {
    alert(`${id}님 반갑습니다.`);
  } else {
    alert("패스워드가 일치하지 않습니다.");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다.");
}
