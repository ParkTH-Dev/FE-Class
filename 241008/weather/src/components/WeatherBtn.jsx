import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
// eslint-disable-next-line
const WeatherBtn = ({ cities, setCity, handleCityChange }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => setCity("")} variant="outline-warning">
        Current Location
      </Button>
      {cities.map((city, i) => (
        <Button
          onClick={() => {
            handleCityChange(city);
          }}
          variant="outline-warning"
          key={i}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherBtn;
