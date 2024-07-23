// Current Position
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const container = document.querySelector("#map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  // Olive store info
  const positions = [
    {
      title: "올리브영 부평그랑힐스점",
      latlng: new kakao.maps.LatLng(37.5165625, 126.7018652),
      address: "인천 부평구 산청로 97",
    },
    {
      title: "올리브영 인천루원시티점",
      latlng: new kakao.maps.LatLng(37.5219291, 126.6738982),
      address: "인천 서구 가정로 406 루원지웰시티푸르지오 상가 A동 129~131호",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].length,
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });
    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.opne(map, marker);
      };
    };
    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };
    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  // kakao marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  const marker = new kakao.maps.Marker({ position: markerPosition });
  marker.setMap(map);

  // kakao marker infowindow
  const iwContent = '<div class="iwitem">현재 내 위치</div>';
  const iwRemoveable = true;
  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
  });
};
const errorPosition = (err) => {
  alert(err.message);
};
navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

// Kakao map
