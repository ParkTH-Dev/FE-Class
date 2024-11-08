const items = document.querySelectorAll("#card_items li");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    items.forEach((i) => (i.style.opacity = "0.7"));
    item.style.transform = "translateY(-80px)";
    item.style.opacity = "1";
    item.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  });

  item.addEventListener("mouseout", () => {
    items.forEach((i) => (i.style.opacity = "1"));
    item.style.transform = "translateY(0)";
  });
});

// nav 버튼
const topBtn = document.querySelector(".nav_btn");
const menu = document.querySelector(".nav_snb");

topBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// background Image change
const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
const bgImg = document.querySelector("#background_img");

bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImgs[0]})`;

const topContents = document.querySelector("#top_contents");
const contentsTit = topContents.querySelector(".top_contents_title");
const contentsDesc = topContents.querySelector(".top_contents_desc");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    contentsTit.innerText = firstData.title;
    contentsDesc.innerText = firstData.description;

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        changeBackground(index);
        contentsTit.innerText = title;
        contentsDesc.innerText = description;
      });
    });
  });

function changeBackground(index) {
  bgImg.style.opacity = "0";
  setTimeout(() => {
    bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImgs[index]})`;
    bgImg.style.opacity = "1";
  }, 300);
}
