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
const productInfo = "./products.json";
fetch(productInfo) // productInfo 데이터를 가져오는 fetch 요청을 시작
  .then((response) => response.json()) // JSON 형태로 응답을 파싱
  .then((data) => {
    let idCounter = Date.now(); // 현재 시간을 기준으로 유니크한 ID 생성 시작
    const products = {
      data: data.data.map((i) => ({
        ...i, // 기존 데이터 복사
        id: idCounter++, // 유니크한 ID 부여
      })),
    };

    // 중복 출력 방지를 위한 기존 아이템 제거 함수
    const removeItems = () => {
      const items = document.querySelectorAll("li"); // 모든 <li> 요소 선택
      items.forEach((i) => {
        i.remove(); // 선택된 모든 <li> 요소 제거
      });
    };

    // 아이템 생성 함수
    const createItem = (product) => {
      const ul = document.querySelector("ul"); // <ul> 요소 선택
      const li = document.createElement("li"); // 새로운 <li> 요소 생성
      const img = document.createElement("img"); // 새로운 <img> 요소 생성
      const attr = document.createAttribute("src"); // src 속성 생성
      const div = document.createElement("div"); // 새로운 <div> 요소 생성
      const h3 = document.createElement("h3"); // 새로운 <h3> 요소 생성
      const span = document.createElement("span"); // 새로운 <span> 요소 생성

      li.id = product.id; // <li> 요소에 ID 부여

      // 가격을 한국 원화로 포맷
      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);
      h3.className = "name"; // <h3>에 클래스 이름 부여
      h3.innerText = product.name; // <h3>에 제품 이름 설정
      span.className = "price"; // <span>에 클래스 이름 부여
      span.innerText = price; // <span>에 가격 설정
      attr.value = product.img; // img 속성에 이미지 URL 설정
      img.setAttributeNode(attr); // <img>에 src 속성 부여
      div.append(h3, span); // <div>에 <h3>와 <span> 추가
      li.append(img, div); // <li>에 <img>와 <div> 추가
      ul.appendChild(li); // <ul>에 <li> 추가

      li.addEventListener("click", () => {
        // <li> 클릭 시 이동할 URL 설정
        const url = `product-detail.html?category=${
          product.category
        }&name=${encodeURIComponent(product.name)}`;
        window.location.href = url; // 해당 URL로 페이지 이동
      });
    };

    // 모든 데이터를 출력하는 함수
    const importData = () => {
      products.data.map((product) => {
        createItem(product); // 각 제품 아이템 생성
      });
    };
    importData(); // 모든 데이터 출력

    // 새로운 리스트로 정렬하는 버튼
    const newListing = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault(); // 기본 동작 방지
      const myProducts = products.data.sort((a, b) => {
        return a.id - b.id; // ID를 기준으로 정렬
      });
      removeItems(); // 기존 아이템 제거
      myProducts.forEach((product) => {
        createItem(product); // 새로운 정렬로 아이템 생성
      });
    };
    newListing.addEventListener("click", sortNew); // 클릭 시 정렬 함수 실행

    // 오름차순 정렬 버튼
    const asceButton = document.querySelector(".ascending");
    const sortAsce = (e) => {
      e.preventDefault(); // 기본 동작 방지
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price; // 가격을 기준으로 오름차순 정렬
      });
      removeItems(); // 기존 아이템 제거
      myProducts.forEach((product) => {
        createItem(product); // 새로운 정렬로 아이템 생성
      });
    };
    asceButton.addEventListener("click", sortAsce); // 클릭 시 정렬 함수 실행

    // 내림차순 정렬 버튼
    const descButton = document.querySelector(".decending");
    const sortDesc = (e) => {
      e.preventDefault(); // 기본 동작 방지
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price; // 가격을 기준으로 내림차순 정렬
      });
      removeItems(); // 기존 아이템 제거
      myProducts.forEach((product) => {
        createItem(product); // 새로운 정렬로 아이템 생성
      });
    };
    descButton.addEventListener("click", sortDesc); // 클릭 시 정렬 함수 실행

    // 검색 바에서 검색어 입력 시 데이터를 필터링하여 출력
    const searchBar = document.querySelector(".search_bar");
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase(); // 소문자로 변환하여 검색
      if (keyword === "") {
        removeItems(); // 기존 아이템 제거
        importData(); // 모든 데이터 출력
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword); // 이름에 키워드 포함 여부 확인
        });
        removeItems(); // 기존 아이템 제거
        filtered.forEach((product) => {
          createItem(product); // 필터링된 데이터 출력
        });
      }
    });

    // 카테고리 선택 시 필터링하여 출력
    const select = document.querySelector("select");
    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex; // 선택된 옵션의 인덱스
      const value = e.target.options[selectedIndex].value; // 선택된 옵션의 값

      const filtered = products.data.filter((product) => {
        return product.category === value; // 카테고리에 맞는 제품 필터링
      });
      removeItems(); // 기존 아이템 제거
      filtered.forEach((product) => {
        createItem(product); // 필터링된 데이터 출력
      });
    };
    select.addEventListener("change", selectCategory); // 선택 변경 시 필터링 함수 실행
  })
  .catch((error) => {
    console.log(error); // 에러 발생 시 콘솔에 로그 출력
  });
