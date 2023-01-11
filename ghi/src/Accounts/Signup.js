import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Signup = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-form-container">
      <div className="col-md-12 text-center">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <div className="col-md-12 text-center" style={{ color: "black" }}>
                <h1>Signup</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <label style={{ color: "black" }} htmlFor="firstName">
                  First Name
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    className="form-control"
                  />
                </div>
                <label style={{ color: "black" }} htmlFor="lastName">
                  Last Name
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    className="form-control"
                  />
                </div>
                <label style={{ color: "black" }} htmlFor="email">
                  Email
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <label style={{ color: "black" }} htmlFor="password">
                  Password
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="****"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-dark" type="submit">
                  Signup
                </button>
              </form>
              &nbsp;&nbsp;&nbsp;
              <div>
                <button type="button" className="btn btn-dark">
                <NavLink
                    style={{"color": "white"}}
                    className="nav-link"
                    aria-current="page"
                    to="/login/">
                    Already have an account? Login here.
                </NavLink>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
