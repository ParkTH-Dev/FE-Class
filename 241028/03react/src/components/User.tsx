import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { users } from "../db";
import { Link } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>
        id : {userId} / name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
