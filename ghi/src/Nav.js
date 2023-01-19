import { NavLink } from "react-router-dom";
import { useAuthContext, useToken } from "./Accounts/Token";
import Swapshop2 from "./Swapshop2.png";
import "./Styling.css";

function Nav() {
  const { token } = useAuthContext();
  const { logout } = useToken();
  console.log({ token });
  if (token) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <a href="" className="logo">
              <img
                className="logo"
                height="100"
                width="100"
                src={Swapshop2}
                alt=""
              />
            </a>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-light custombutton">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="/createlisting/"
          >
            List Item
          </NavLink>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-light custombutton"
          onClick={logout}
        >
          Logout
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://freesvg.org/img/abstract-user-flat-4.png"
                  height="70"
                  width="70"
                />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/profile/">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/mens/">
                    Mens
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/womens/">
                    Women's
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/jewelry/">
                    Jewelry
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="...">
                    Sold
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <a href="" className="logo">
              <img
                className="logo"
                height="100"
                width="100"
                src={Swapshop2}
                alt=""
              />
            </a>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <button type="button" className="btn btn-light custombutton">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="/signup/"
          >
            Signup
          </NavLink>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-light custombutton">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="/login/"
          >
            Login
          </NavLink>
        </button>
        &nbsp;&nbsp;&nbsp;
      </nav>
    );
  }
}

export default Nav;
