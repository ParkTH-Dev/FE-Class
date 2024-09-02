anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});
anime({
  targets: ".box2",
  translateX: 250,
  translateY: 400,
  easing: "easeInOutCirc",
  duration: 1500,
  loop: true,
  direction: "alternate",
  scale: 3,
});
anime({
  targets: ".box3",
  translateX: {
    value: 400,
    delay: 1000,
    duration: 1000,
  },
  rotate: {
    value: 360,
    delay: 1000,
    duration: 1000,
    scale: 1.3,
  },
  loop: true,
  direction: "alternate",
});
