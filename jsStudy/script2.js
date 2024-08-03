const words = ["apple", "banana", "cherry", "avocado", "grape"];
const startLetter = "a";

let matching = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].startsWith(startLetter)) {
    matching.push(words[i]);
  }
}
console.log(`${matching}로 시작하는 단어는`);
