import { NavLink } from "react-router-dom";
import { useToken } from "./Accounts/Token";

function Nav() {
  const [token, , logout] = useToken()
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
    </nav>
  );
}

export default Nav;
