import React from "react";

type User = {
  name: "string";
  username: "string";
  email: "string";
  id: "string";
};

interface Props {
  user: User[];
}

const ListUsers = ({ user }: Props) => {
  return (
    <div>
      {user.map((data) => {
        return (
          <>
            <div
              key={data.id}
              style={{ border: "1px solid gray", width: "500px" }}
            >
              <h1>{data.name}</h1>
              <h1>{data.username}</h1>
              <h1>{data.email}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ListUsers;
