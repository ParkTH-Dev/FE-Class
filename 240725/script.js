// js 방식
// import products from "./products.js";
// console.log(products.data[0].img);

// const ul = document.querySelector("ul");

// //html에 넣을 li태그 생성
// const li = document.createElement("li");
// //html에 넣을 img태그 생성
// const img = document.createElement("img");
// // 이미지에 넣을 src속성을 생성
// const attr = document.createAttribute("src");
// //html에 넣을 div태그 생성
// const div = document.createElement("div");
// const h3 = document.createElement("h3");
// const span = document.createElement("span");

// // 나라의 통화표시를 위한 Intl.NumberFormat
// const price = new Intl.NumberFormat("ko-kr", {
//   style: "currency",
//   currency: "KRW",
// }).format(products.data[3].price);

// // h3태그에 클래스 name값 넣기
// h3.className = "name";
// // h3태그에 products 객체에 데이터 불러와서 name값 넣기
// h3.innerText = products.data[3].name;
// span.className = "price";
// // span.innerText = products.data[3].price;
// // Intl.NumberFormat 값을 준 price 변수를 span에 넣기
// span.innerText = price;

// // src속성을 products 객체에 데이터 불러와서 넣기
// attr.value = products.data[3].img;
// // img태그에 src속성 넣기 setAttributeNode
// img.setAttributeNode(attr);
// // li태그 자식 요소에 h3, span 한번에 넣기 append
// div.append(h3, span);
// // li태그 자식 요소에 img, div 한번에 넣기 append
// li.append(img, div);
// // li태그 자식 요소에 img 넣기 appenChild
// // li.appendChild(img);
// // li태그 자식 요소에 div 넣기 appenChild
// // li.appendChild(div);
// // ul태그 자식요소에 li 넣기 appendChild
// ul.appendChild(li);

// json 방식
const productInfo =
  "https://my-json-server.typicode.com/ParkTH-Dev/fake-server/db";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((i) => ({
        ...i,
        id: idCounter++,
      })),
    };

    // removing items 중복출력 방지
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((i) => {
        i.remove();
      });
    };

    // making items
    const createItem = (product) => {
      const ul = document.querySelector("ul");
      //html에 넣을 li태그 생성
      const li = document.createElement("li");
      //html에 넣을 img태그 생성
      const img = document.createElement("img");
      // 이미지에 넣을 src속성을 생성
      const attr = document.createAttribute("src");
      //html에 넣을 div태그 생성
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      // 나라의 통화표시를 위한 Intl.NumberFormat
      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);
      // h3태그에 클래스 name값 넣기
      h3.className = "name";
      // h3태그에 products 객체에 데이터 불러와서 name값 넣기
      h3.innerText = product.name;
      span.className = "price";
      // span.innerText = products.data[3].price;
      // Intl.NumberFormat 값을 준 price 변수를 span에 넣기
      span.innerText = price;
      // src속성을 products 객체에 데이터 불러와서 넣기
      attr.value = product.img;
      // img태그에 src속성 넣기 setAttributeNode
      img.setAttributeNode(attr);
      // li태그 자식 요소에 h3, span 한번에 넣기 append
      div.append(h3, span);
      // li태그 자식 요소에 img, div 한번에 넣기 append
      li.append(img, div);
      // li태그 자식 요소에 img 넣기 appenChild
      // li.appendChild(img);
      // li태그 자식 요소에 div 넣기 appenChild
      // li.appendChild(div);
      // ul태그 자식요소에 li 넣기 appendChild
      ul.appendChild(li);

      li.addEventListener("click", () => {
        const url = `product-detail.html?category=${
          product.category
        }&name=${encodeURIComponent(product.name)}`;
        window.location.href = url;
      });
    };

    // importing items (모든 데이터를 출력 )
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };
    importData();

    // newList
    const newListing = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.id - b.id;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    newListing.addEventListener("click", sortNew);

    //   ascending
    const asceButton = document.querySelector(".ascending");
    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    asceButton.addEventListener("click", sortAsce);
    // descending
    const descButton = document.querySelector(".decending");
    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    descButton.addEventListener("click", sortDesc);

    // search 검색에서 데이터를 찾아와 출력하기
    const searchBar = document.querySelector(".search_bar");
    searchBar.addEventListener("input", () => {
      // 소문자로 변환
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });
        removeItems();
        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    // select Event
    const select = document.querySelector("select");
    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;

      const filtered = products.data.filter((product) => {
        return product.category === value;
      });
      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };
    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  });
