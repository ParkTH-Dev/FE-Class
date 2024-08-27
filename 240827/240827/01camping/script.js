const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=27TP3Z9KcbT%2BCTzdVvths2WSrZmy%2Bh6NsBrNISKWtRs4Ne6t9v6qb27%2BqZYRbW4TyepSgzHto5cSPkzVeYKXtQ%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const data = json.response.body.items.item;
      // console.log(data);

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });
        markers.push(marker);

        const makerOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };
        const makerOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };
        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makerOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makerOutListener(infowindow)
        );
      }
      clusterer.addMarkers(markers);
    });

  const { latitude, longitude } = position.coords;

  const mapContainer = document.querySelector("#map");
  const mapOption = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 10, // 클러스터 할 최소 지도 레벨
  });

  // const positions = [
  //   {
  //     title: "이젠아카데미",
  //     latlng: new kakao.maps.LatLng(latitude, longitude),
  //   },
  //   {
  //     title: "그린아카데미",
  //     latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
  //   },
  //   {
  //     title: "SBS아카데미",
  //     latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
  //   },
  //   {
  //     title: "코리아IT",
  //     latlng: new kakao.maps.LatLng(37.4999467, 127.0354264),
  //   },
  //   {
  //     title: "하이미디어",
  //     latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
  //   },
  // ];

  // const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // const marker = new kakao.maps.Marker({
  //   position: markerPosition,
  // });

  // marker.setMap(map);

  // const iwContent =
  //     '<div style="padding:5px;"><a href ="https://www.naver.com" target="_blank">현재위치!</a></div>',
  //   iwRemoveable = true;

  // const infowindow = new kakao.maps.InfoWindow({
  //   content: iwContent,
  //   removable: iwRemoveable,
  // });

  // kakao.maps.event.addListener(marker, "click", function () {
  //   infowindow.open(map, marker);
  // });
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
