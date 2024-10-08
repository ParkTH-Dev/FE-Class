import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/weatherBox";
import WeatherBtn from "./components/WeatherBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";

const Globalstyles = createGlobalStyle`
  ${reset}
  *{margin:0;
    padding:0;
    box-sizing: border-box;
  }
  ul, li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000 ${({ bgImg }) => `url(${bgImg})`} center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [bgImg, setBgImg] = useState("");

  const handleCityChange = (city) => {
    if (city === "current") setCity(null);
    else setCity(city);
  };
  const [loading, setLoading] = useState(true);
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getWeatherBycurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    ``;
    setWeather(data);
    setLoading(false);
  };
  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherBycurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const getBG = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => setBgImg(full));
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBG();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <Globalstyles />
      <Wrapper bgImg={bgImg}>
        <Contents>
          <ClipLoader color="#f88c6b" loading={loading} size={50} />
          <WeatherBox weather={weather} />
          <WeatherBtn
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
}

export default App;
