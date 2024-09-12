import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

const Wrapper = styled.div`
  font-size: 60px;
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Diary" element={<Diary />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/New"}>New</Link>
        <Link to={"/Edit"}>Edit</Link>
        <Link to={"/Diary"}>Diary</Link>
      </div>
    </Wrapper>
  );
}

export default App;
