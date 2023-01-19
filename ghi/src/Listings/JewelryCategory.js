import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Jewelry() {
  const [listings, setListings] = useState([]);
  const loadJewelry = async () => {
    const url = `${process.env.REACT_APP_swapshop_API_HOST}/listings/categories/3`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setListings(data);
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
      &nbsp;&nbsp;&nbsp;
      <Carousel responsive={responsive}>
        {listings
          .filter((listing) =>
            listing.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((listing) => (
            <Col style={{ color: "black" }} key={listing.listings_id}>
              <div className="card">
                <Card>
                  <Card.Img src={listing.image_url} height="500" width="200" />
                  <Card.Body>
                    <div className="col-md-12 text-center">
                      <div className="card-title">
                        <Card.Title>{listing.name}</Card.Title>
                      </div>
                      <div className="list-group-item">
                        <Card.Text>{listing.condition}</Card.Text>
                      </div>
                      <div className="list-group-item">
                        <Card.Text>${listing.price}</Card.Text>
                      </div>
                      <div className="list-group-item">
                        <Card.Text>{listing.description}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Carousel>
    </div>
  );
}

export default Jewelry;
