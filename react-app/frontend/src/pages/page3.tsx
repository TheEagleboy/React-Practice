import { useState, useEffect, ReactNode } from "react";
import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";
import ListUsers from "../components/ListUsers";

import Button from "../components/Button";
import Counter from "../components/Counter";
import { CounterContext } from "../context/CounterContext";
import { CounterProvider } from "../context/CounterContext";
import { initState } from "../context/CounterContext";
import NavBar from "../components/NavBar";

export function Page3() {
  type User = {
    name: "string";
    username: "string";
    email: "string";
    id: "string";
  };

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const [seeUser, setSeeUser] = useState(false);

  const [user, setUser] = useState<User[]>([]);

  const getUser = async () => {
    try {
      fetch("http://localhost:3000/api/user")
        .then((res) => res.json())
        .then((data: User[]) => {
          setUser(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <h1>
        <Button
          name="Click Here"
          color="primary"
          onClick={() => setAlertVisibility(true)}
        />
      </h1>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter
          children={function (num: number): ReactNode {
            return <>Current Count: {num}</>;
          }}
        ></Counter>
      </CounterProvider>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <h1>
        <Button
          name="See Users"
          color="secondary"
          onClick={() => setSeeUser(!seeUser)}
        ></Button>
      </h1>
      {seeUser && <ListUsers user={user} />}
    </>
  );
}
