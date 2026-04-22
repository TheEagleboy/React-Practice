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
              <h3>{data.username}</h3>
              <h3>{data.name}</h3>
              <p>{data.email}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ListUsers;
