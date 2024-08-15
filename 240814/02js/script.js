// search modal
const searchBtn = document.querySelector(".fa-magnifying-glass");
const modal = document.querySelector(".modal-search");

searchBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

// search bar
const searchBar = document.querySelector(".search input[type='text']");

searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// accodion Event
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");

titles.forEach((item, i) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== item) {
        otherTitle.classList.remove("active");
      }
    });

    let content = item.nextElementSibling;
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      content.style.display = "none";
    } else {
      item.classList.add("active");
      content.style.display = "block";
    }
  });
});
