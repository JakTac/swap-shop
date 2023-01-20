import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styling.css";

const responsive = {
  superLargeDesktop: {
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
      &nbsp;&nbsp;&nbsp;
      <div className="col-md-12 text-left">
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
        <div className="col-md-12 text-center">
          <h2 className="display-5" style={{ color: "black" }}>
            Jewelry
          </h2>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <h2 className="display-5" style={{ color: "black" }}>
          Featured Items
        </h2>
      </div>
      &nbsp;&nbsp;&nbsp;
      <Carousel responsive={responsive}>
        {listings
          .filter(
            (listing) =>
              (listing.name.toLowerCase().includes(search.toLowerCase()) &&
                listing.name.toLowerCase().includes("gold")) ||
              listing.name.toLowerCase().includes("silver")
          )
          .map((listing) => (
            <Col style={{ color: "black" }} key={listing.listings_id}>
              <div className="item-card">
                <Card>
                  <Card.Img src={listing.image_url} height="300" width="500" />
                  <Card.Body>
                    <div className="col-md-12 text-center">
                      <div className="card-title">
                        <Card.Title>{listing.name}</Card.Title>
                      </div>
                      <div className="list-group-item list-group-item-dark">
                        <Card.Text>{listing.condition}</Card.Text>
                      </div>
                      <div className="list-group-item list-group-item-dark">
                        <Card.Text>${listing.price}</Card.Text>
                      </div>
                      <div className="list-group-item list-group-item-dark">
                        <Card.Text>{listing.description}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Carousel>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search for item.."
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="col-md-12 text-center">
        <h2 className="display-5" style={{ color: "black" }}>
          Full Collection
        </h2>
      </div>
      &nbsp;&nbsp;&nbsp;
      {listings
        .filter((listing) =>
          listing.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((listing) => (
          <div className="card-columns">
            <div className="item-card">
              <Col style={{ color: "black" }} key={listing.listings_id}>
                <Card>
                  <Card.Body>
                    <Card.Img
                      src={listing.image_url}
                      height="500"
                      width="200"
                    />
                    <div className="col-md-12 text-center">
                      <div className="card-title">
                        <Card.Title>{listing.name}</Card.Title>
                      </div>
                      <div className="list-group-item list-group-item-dark">
                        <Card.Text>{listing.condition}</Card.Text>
                      </div>
                      <div className="list-group-item list-group-item-dark">
                        <Card.Text>${listing.price}</Card.Text>
                      </div>
                      <div className="list-group-item list-group-item-dark">
                        <Card.Text>{listing.description}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Jewelry;
