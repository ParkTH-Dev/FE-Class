import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";
import { useState } from "react";

const Globalstyles = createGlobalStyle`
  ${reset}
  *{
margin: 0;
padding: 0;
box-sizing: border-box;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background: #666;
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://res.cloudinary.com/stampin-up/image/upload/bo_1px_solid_rgb:cccccc/w_1600,q_60,f_auto,d_missing_image.png/v1/prod/images/default-source/product-image/103579.jpg",
  },
  paper: {
    name: "rock",
    img: "https://img.freepik.com/free-vector/hand-drawn-paper-cartoon-illustration_23-2151352369.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputer(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgeMent = (user, computer) => {
    if (user.name === computer.name) {
      return "drow";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "Win" : "Lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "Win" : "Lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "Win" : "Lose";
    }
  };

  return (
    <>
      <Globalstyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computer} result={result} />
        </BoxGroup>
        <BtnGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </BtnGroup>
      </Wrapper>
    </>
  );
}

export default App;
