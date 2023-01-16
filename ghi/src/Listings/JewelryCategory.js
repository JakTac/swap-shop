
import React, { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function Jewelry() {
  const [listings, setListings] = useState([]);
  const loadJewelry = async () => {
    const url = `${process.env.REACT_APP_swapshop_API_HOST}/listings`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setListings(data.listings);
    } else {
      console.error("Error in fetching jewelry, try again.");
    }
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadJewelry();
  }, []);

  return (
    <div className="jewelry-container">
      <div className="col-md-12 text-center">
        <h2 className="display-5 fw-bold" style={{ color: "black" }}>
          Jewelry
        </h2>
      </div>
      <div className="col-md-12 text-center">
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark">
          <NavLink
            style={{ color: "white" }}
            className="nav-link"
            aria-current="page"
            to="/"
          >
            Back to Home Page
          </NavLink>
        </button>
        <div>
          &nbsp;&nbsp;&nbsp;
          <input
            type="search"
            placeholder="Search for item.."
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        <div className="col-md-12 text-center">
          <table className="table table-striped">
            <thead>
              <tr style={{ color: "black" }}>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Condition</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {listings
                ?.filter(
                  (listings) =>
                    listings.name.includes(search) &&
                    listings.category_id.includes('3')
                )
                .map((listings) => (
                  <tr style={{ color: "black" }} key={listings.listings_id}>
                  <td>
                      <img
                        src={listings.image_url}
                        height="400"
                        width="600"
                      ></img>
                    </td>
                    <td>{listings.name}</td>
                    <td>{listings.category_id}</td>
                    <td>{listings.condition}</td>
                    <td>{listings.price}</td>
                    <td>{listings.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jewelry;
