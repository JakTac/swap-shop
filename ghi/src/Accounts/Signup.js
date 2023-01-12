import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "./Login";

function Signup({ signup }) {
  // const [token, signup] = useToken();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      formData.firstname,
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
  };
  // const initialState = {
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         pass: "",
  // };

  // export const Signup = () => {
  //   let Navigate = useNavigate();

  //   const [ formData, setFormData ] = useState(initialState)
  //   const [firstName, setfirstName] = useState("");
  //   const [lastName, setlastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const SignupUrl = 'http://localhost:8000/swapshop/accounts';
  //     // dynamic or static URL?
  //     const fetchConfig = {
  //         method: "post",
  //         body: JSON.stringify(formData),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       };
  //       const response = await fetch(SignupUrl, fetchConfig);
  //       if (response.ok) {
  //           setFormData(initialState);
  //           Navigate("/")
  //       }
  //       if (response.ok) {
  //         await Login(email, pass);
  //       }
  //       return false;
  //       }

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
