import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

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
                <h1>Login</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <label style={{ color: "black" }} htmlFor="email">
                  Email
                </label>
                <div className="form-floating mb-3">
                  <input
                    value={login.email}
                    onChange={handleChange}
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
                    value={login.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="*******"
                    required
                    id="current-password"
                    name="current-password"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-dark" type="submit">
                  Login
                </button>
              </form>
              &nbsp;&nbsp;&nbsp;
              <div>
                <button type="button" className="btn btn-dark">
                <NavLink
                    style={{"color": "white"}}
                    className="nav-link"
                    aria-current="page"
                    to="/signup/">
                    Don't have an account? Signup here.
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
