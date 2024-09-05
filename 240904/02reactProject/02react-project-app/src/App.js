import styled from "styled-components";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useEffect, useRef, useState } from "react";
import Even from "./components/Even";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  & > section {
    width: 100%;
    background-color: rgb(245, 245, 245);
    padding: 20px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // useEffect(() => {
  //   console.log("Update", count, text);
  //   // alert("count Update", count);
  // }, [count, text]);
  // useEffect(() => {
  //   console.log("component update");
  //   // alert("count Update", count);
  // });
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);
  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalId);
  //   };
  // });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} type="text" onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </Wrapper>
  );
}

export default App;
