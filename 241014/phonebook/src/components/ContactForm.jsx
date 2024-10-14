import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNum } });
  };

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContext">
        <Form.Label>휴대폰 번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="휴대폰 번호를 입력해주세요."
          onChange={(e) => setPhoneNum(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        create
      </Button>
    </Form>
  );
};

export default ContactForm;
