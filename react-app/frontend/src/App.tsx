import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Movies } from "./pages/movies";
import { Favorites } from "./pages/favorites";
import Layout from "./components/Layout";

//App.tsx is where holds all pages

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

/*
(
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
      )
*/

/*
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
  */
