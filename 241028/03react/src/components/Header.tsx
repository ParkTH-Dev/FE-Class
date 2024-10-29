import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header``;

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;
