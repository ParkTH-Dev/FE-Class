const path = anime.path("svg path");

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  duration: 7000,
  loop: true,
  easing: "linear",
});
