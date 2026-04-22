import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/page1"}>
        <button>Page 1</button>
      </Link>
      <Link to={"/page2"}>
        <button>Page 2</button>
      </Link>
      <Link to={"/page3"}>
        <button>Page 3</button>
      </Link>
      <Link to={"/movies"}>
        <button>movies</button>
      </Link>
      <Link to={"/favorites"}>
        <button>Favorites</button>
      </Link>
    </div>
  );
};

export default NavBar;
