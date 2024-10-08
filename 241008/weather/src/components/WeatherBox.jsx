import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  height: 100%;
  /* color: #fff; */
  background: rgba(240, 255, 255, 0.6);
  padding: 50px;
  border: 5px solid #fff;
  border-radius: 28px;
`;

const City = styled.h1`
  font-size: 22px;
`;

const Weather = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

const Desc = styled.h3`
  font-size: 26px;
`;

const WeatherBox = ({ weather }) => {
  let cityName;
  switch (weather?.name) {
    case "Incheon":
      cityName = "서울시 강남구";
      break;
    case "Paris":
      cityName = "파리";
      break;
    case "Seoul":
      cityName = "서울";
      break;
    case "New York":
      cityName = "뉴욕";
      break;
    case "Tokyo":
      cityName = "도쿄";
      break;
  }
  let weatherName;
  switch (weather?.weather[0]?.main) {
    case "Clouds":
      weatherName = "구름 낀 하늘";
      break;
    case "Clear":
      weatherName = "맑은 하늘";
      break;
    case "Rain":
      weatherName = "비가 오는 날씨";
      break;
    case "Snow":
      weatherName = "눈이 오는 날씨";
      break;
    case "Drizzle":
      weatherName = "이슬비";
      break;
    case "Thunderstorm":
      weatherName = "뇌우";
      break;
    case "Mist":
    case "Fog":
    case "Haze":
      weatherName = "안개 낀 날씨";
      break;
  }
  return (
    <Wrapper>
      <City>도시 : {cityName}</City>
      <Weather>
        온도 {weather && weather?.main.temp}° / 습도 :{" "}
        {weather && weather?.main.humidity}%
      </Weather>
      <Desc>현재 날씨 : {weatherName}</Desc>
    </Wrapper>
  );
};

export default WeatherBox;
