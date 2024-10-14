import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

const ContactList = () => {
  //   구조분해할당자;
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <>
      <h6>친구 목록</h6>
      <SearchBar />
      {filteredList.map((item, i) => (
        <ContactItem key={i} item={item} />
      ))}
    </>
  );
};

export default ContactList;
