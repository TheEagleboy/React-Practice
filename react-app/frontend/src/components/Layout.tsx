import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
        <h1>Above is header section</h1>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <h1>Footer section</h1>
      </footer>
    </>
  );
};

export default Layout;
