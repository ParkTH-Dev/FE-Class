const productInfo = "./products.json"; // productInfo 변수에 JSON 파일 경로를 저장

// fetch 메서드를 사용하여 productInfo에서 데이터를 가져옴
fetch(productInfo)
  .then((response) => response.json()) // 응답(response)을 JSON 형식으로 파싱
  .then((data) => {
    let idCounter = Date.now(); // 현재 시간을 기준 으로 유니크한 ID 생성
    const products = {
      data: data.data.map((i) => ({
        ...i, // 데이터 객체 i의 모든 속성을 복사
        id: idCounter++, // 각 객체에 고유 ID 추가
      })),
    };

    // URLSearchParam s를 사용하여 URL의 쿼리스트링을 파싱
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category"); // "category"라는 키의 값을 가져옴
    const name = params.get("name"); // "name"이라는 키의 값을 가져옴

    // products 데이터에서 category와 name이 일치하는 첫 번째 제품을 찾음
    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );

    // 가격을 한국 원화 형식으로 변환하여 저장
    const price = new Intl.NumberFormat("ko-kr", {
      currency: "KRW", // 통화를 한국 원화로 설정
    }).format(product.price); // product 객체의 가격을 포맷팅

    if (product) {
      // 제품이 존재하는 경우
      const productDetailDiv = document.querySelector("#product-detail"); // product-detail 요소를 선택
      productDetailDiv.innerHTML = `
    <div class="product-category">
        <h3>현재카테고리 ${product.category} > ${product.name}</h3> <!-- 제품의 카테고리와 이름을 표시 -->
    </div>
    <div>
        <div class="product-img"> 
            <img src="${product.img}" alt="${product.name}"/> <!-- 제품 이미지와 대체 텍스트 설정 -->
        </div>
        <div class="product-info">
            <h1>${product.name}</h1> <!-- 제품 이름을 표시 -->
            <p>Category: ${product.category}</p> <!-- 제품 카테고리를 표시 -->
            <p>Price: ${price}원</p> <!-- 제품 가격을 표시 -->
        </div>
        <button>장바구니 이동</button> <!-- 장바구니 이동 버튼 -->
    </div>
    `; // 제품 정보를 HTML 구조로 삽입
    } else {
      // 제품이 존재하지 않는 경우
      const productDetailDiv = document.querySelector("#product-detail"); // product-detail 요소를 선택
      productDetailDiv.innerHTML = "존재하지 않는 상품입니다."; // "존재하지 않는 상품입니다." 메시지 표시
    }
  })
  .catch((error) => {
    console.log(error); // 오류 발생 시 오류 메시지를 콘솔에 출력
  });
