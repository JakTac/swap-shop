import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useToken } from "./Token";


function LoginComponent({login}) {
  // const [token, login] = useToken();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password)
    setFormData({
          email: "",
          password: "",
    })
  }

// async function Login(email, password) {
//   const url = `${process.env.REACT_APP_swapshop_API_HOST}/token`;

//   const form = new FormData();
//   form.append("email", email);
//   form.append("password", password);

//     const loginUrl = 'http://localhost:8000/token'
//     const fetchConfig = {
//       method: "post",
//       body: JSON.stringify(formData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//   const response = await fetch(url, {
//     headers: { Authorization: `Bearer ${token}`},
//     method: "post",
//     credentials: "include",
//     body: form,
//   });
//   if (response.ok) {
//     const tokenUrl = `${process.env.REACT_APP_swapshop_API_HOST}/token`;

//     try {
//       const response = await fetch(tokenUrl, {
//         credentials: "include",
//       });
//       if (response.ok) {
//         const data = await response.json();
//         const token = data.access_token;
//         // DO SOMETHING WITH THE TOKEN SO YOU CAN USE IT
//         // IN REQUESTS TO YOUR NON-ACCOUNTS SERVICES
//       }
//     } catch (e) {}
//     return false;
//   }
//   let error = await response.json();
//   // DO SOMETHING WITH THE ERROR, IF YOU WANT
// }

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
                    onChange={(event) => setFormData({...formData, email: event.target.value})}
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
                    onChange={(event) => setFormData({...formData, password: event.target.value})}
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

export default LoginComponent;
