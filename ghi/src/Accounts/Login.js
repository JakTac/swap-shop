import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useToken } from "./Token";

function LoginComponent() {
  const { login } = useToken();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
    setFormData({
      email: "",
      password: "",
    });
    if (login.ok) {
      return navigate("/");
    } else {
      setErrorMessage("Incorrect login, try again!");
    }
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
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
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
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                    type="password"
                    placeholder="*******"
                    required
                    id="current-password"
                    name="current-password"
                    className="form-control"
                  />
                </div>
                <div>
                  <button className="btn btn-dark" type="submit">
                    Login
                  </button>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {" "}
                      {errorMessage}{" "}
                    </div>
                  )}
                </div>
              </form>
              &nbsp;&nbsp;&nbsp;
              <div>
                <button type="button" className="btn btn-dark">
                  <NavLink
                    style={{ color: "white" }}
                    className="nav-link"
                    aria-current="page"
                    to="/signup/"
                  >
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
}

export default LoginComponent;
