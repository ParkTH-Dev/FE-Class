const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((item, i) => {
  item.addEventListener("click", function () {
    stars.forEach((s, index) => {
      if (index <= i) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let message = "";
    let imgURL = "";

    switch (index) {
      case 0:
        message = "별로에요..";
        imgURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "그냥 그래요.";
        imgURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "보통이에요.";
        imgURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "맘에 들어요";
        imgURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주좋아요";
        imgURL = "./img/star-lv5.png";
        break;
    }
    print.innerHTML = `<img src="${imgURL}"> ${message}`;
  });
});
