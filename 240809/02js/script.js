// // Math 수학객체 => 함수
// let num = 2.1234;
// let num1 = 3.8234;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);
// let roundNum = Math.round(num); //반올림
// let floorNum = Math.floor(num1); //내림
// let ceilNum = Math.ceil(num); //올림
// let rndNum = Math.random();
// let piNum = Math.PI;

// document.write(maxNum, "<br />");
// document.write(minNum, "<br />");
// document.write(roundNum, "<br />");
// document.write(ceilNum, "<br />");
// document.write(floorNum, "<br />");
// document.write(rndNum, "<br />");
// document.write(piNum, "<br />");

const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  const rotation = (degree * Math.PI) / 180;
  const targetX = innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  requestAnimationFrame(loop);
};

loop();
