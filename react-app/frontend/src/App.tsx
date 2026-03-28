import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { ReactNode, useEffect, useState } from "react";
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

function App() {
  type User = {
    name: "string";
    username: "string";
    email: "string";
  };

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

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
      <div>
        {user.map((data) => {
          return (
            <>
              <div key={data.username}>
                <h1>{data.name}</h1>
                <h1>{data.username}</h1>
                <h1>{data.email}</h1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
