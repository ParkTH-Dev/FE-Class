const student = { name: "davit", major: "컴공", grade: 2 };
const json = JSON.stringify(student);
//json ==> '{"name":"davit","major":"컴공","grade":2}'
const origin = JSON.parse(json);
//origin ==> {name: 'davit', major: '컴공', grade: 2}
//방법 --> student json 파일과 같이 사용
const xhr = new XMLHttpRequest(); // ==>인스턴스 객체가 되었다.
xhr.open("GET", "student.json");
//인자값 => 받는방식,받는데이터,
xhr.send();
// 서버가 없어서 만듬. 데이터를 보내라는 요청을 클라디언트인 우리가 보낸것. 원래는 서버의 역할
//라이브서버 열고 콘솔에 xhr 검색
//readyState: 4 ==>
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    //서버가 값을 정상적으로 전송하고 . 둘사이 소통이 정상적일때.
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerText = `${students.name}은 ${students.major}학과의 ${students.grade}학년입니다.`;
  }
};
