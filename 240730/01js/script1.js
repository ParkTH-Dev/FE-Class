const num = Number(prompt("화씨 온도를 입력해주세요"));
const cel = ((num - 32) / 1.8).toFixed(2);
alert(`화씨${num} => 섭씨${cel}`);
