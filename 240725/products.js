const products = {
  data: [
    {
      id: Date.now(), //id값이 중복되면 안되니 시간으로 id값을 지정
      name: "Book",
      price: 19900,
      category: "book",
      img: "./img/book.jpg",
    },
    {
      id: Date.now() + 1, //id값이 중복되면 안되니 시간으로 id값을 지정
      name: "Mouse",
      price: 15000,
      category: "it",
      img: "./img/mouse.jpg",
    },
    {
      id: Date.now() + 2, //id값이 중복되면 안되니 시간으로 id값을 지정
      name: "Keyboard",
      price: 21000,
      category: "it",
      img: "./img/keyboard.jpg",
    },
    {
      id: Date.now() + 3, //id값이 중복되면 안되니 시간으로 id값을 지정
      name: "Cup",
      price: 9900,
      category: "life",
      img: "./img/cup.jpg",
    },
    {
      id: Date.now() + 4, //id값이 중복되면 안되니 시간으로 id값을 지정
      name: "Pen",
      price: 1500,
      category: "book",
      img: "./img/pen.jpg",
    },
  ],
};

export default products;
