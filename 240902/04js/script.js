const tl = anime.timeline({
  easing: "linear",
  duration: 2000,
});

tl.add({
  targets: ".circle1",
  translateX: 500,
})
  .add({
    targets: ".circle1",
    translateY: 300,
  })
  .add({
    targets: ".circle1",
    translateX: -500,
  })
  .add({
    targets: ".circle1",
    translateY: 0,
  })
  .add({
    targets: ".circle1",
    translateX: 0,
  })
  .add({
    targets: ".circle2",
    scale: 1.5,
    rotate: 360,
    borderRadius: 0,
  });
