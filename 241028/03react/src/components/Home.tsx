import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("hi"));
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "241030",
    });
  }, 3000);
  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <Link to={`/users/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
