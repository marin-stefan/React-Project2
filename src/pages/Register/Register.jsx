import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="bg-light border mx-5 my-5 p-1 shadow-lg border rounded  ">
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
      <div className="d-flex justify-content-center align-items-center m-5 p-5">
        <div className=" p-5 shadow-lg border rounded-3 ">
          <h1 className="text-center p-5">Register</h1>
          <form className="bg-light">
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="lastname">Lastname:</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="user-email">Email:</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="pass">Password:</label>
            <br />
            <input type="password" />
            <br />
            <label htmlFor="pass-confirm">Confirm Password:</label>
            <br />
            <input type="password" />
            <br />
            <input
              type="submit"
              value="Register"
              className="btn btn-primary my-2 shadow"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
