import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<FollowersContext>();

  return <h1>{nameOfMyUsers}의 Followers</h1>;
};

export default Followers;
