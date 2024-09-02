const ul = document.querySelector("ul");

const grid = [9, 3];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

anime({
  targets: "li",
  easing: "linear",
  loop: true,
  duration: 1000,
  direction: "alternate",
  scale: anime.stagger([0.2, 0.9], {
    grid: [9, 3],
    from: "center",
    axis: "z",
  }),
});
