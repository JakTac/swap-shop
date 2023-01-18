import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useToken } from "./Token";

function Signup() {
  const { signup, token } = useToken();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await signup(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (e) {
      console.log(formData);
    }
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
                    value={formData.firstName}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        firstName: event.target.value,
                      })
                    }
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
                    value={formData.lastName}
                    onChange={(event) =>
                      setFormData({ ...formData, lastName: event.target.value })
                    }
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
                    placeholder="****"
                    required
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
                    style={{ color: "white" }}
                    className="nav-link"
                    aria-current="page"
                    to="/login/"
                  >
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
}

export default Signup;
