const productInfo =
  "https://my-json-server.typicode.com/ParkTH-Dev/fake-server/db";

//메서드체이닝기법
// fetch(productInfo).then().catch();
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
    // 파라미터값을 받아오기 위한 변수
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const name = params.get("name");
    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );

    const price = new Intl.NumberFormat("ko-kr", {
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerHTML = `
    <div class="product-category">
        <h3>현재카테고리 ${product.category} > ${product.name}</h3>
    </div>
    <div>
        <div class="product-img"> 
            <img src="${product.img}" alt="${product.name}"/>
        </div>
        <div class="product-info">
            <h1>${product.name}</h1>
            <p>Category: ${product.category}</p>
            <p>Price: ${price}원</p>
        </div>
        <button>장바구니 이동</button>
    </div>
    `;
    } else {
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerHTML = "존재하지 않는 상품입니다.";
    }
  })
  .catch((error) => {
    console.log(error);
  });
