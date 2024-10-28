import TodoInput from "./TodoInput";
import ShowOpen from "./ShowOpen";
import { useState } from "react";

const InputWrap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? <TodoInput onClose={onClose} /> : null}
      <ShowOpen onClick={() => setIsOpen(!isOpen)} show={isOpen} />
    </>
  );
};

export default InputWrap;
