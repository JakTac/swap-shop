import { NavLink } from "react-router-dom";
import { useAuthContext, useToken } from "./Accounts/Token";

function Nav() {
  const { token } = useAuthContext();
  const { logout } = useToken();
  console.log({ token });
  if (token) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            SwapShop
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
        <button type="button" className="btn btn-light">
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
        <button type="button" className="btn btn-light" onClick={logout}>
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
                  src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                  height="60"
                  width="60"
                />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="...">
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            SwapShop
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
        <button type="button" className="btn btn-light">
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
        <button type="button" className="btn btn-light">
          <NavLink
            style={{ color: "black" }}
            className="nav-link"
            aria-current="page"
            to="/login/"
          >
            Login
          </NavLink>
        </button>
      </nav>
    );
  }
}

export default Nav;
