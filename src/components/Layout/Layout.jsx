import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="bg-light border mb-3 mx-1 my-1 p-1 shadow-lg border-danger rounded  ">
        <Link to="/" className="mx-2 fs-4 text-warning text-decoration-none">
          Home
        </Link>
        <Link
          to="/about"
          className="mx-2 fs-4 text-warning text-decoration-none"
        >
          About
        </Link>
      </div>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
