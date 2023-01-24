import React, { useState, useEffect } from "react";
import { Card, Row, Container, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAccountId } from "../Accounts/Token";
import "../Styling.css";

const responsive = {
  ultraWide: {
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

function WomensPage() {
  const [listings, setListings] = useState([]);
  const [user, setUser] = useState([]);
  const loaduser = async () => {
    const data = await getAccountId();
    setUser(data);
  };
  const loadWomens = async () => {
    const url = `${process.env.REACT_APP_swapshop_API_HOST}/listings/categories/2`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setListings(data);
    } else {
      console.error("Error in loading womens items.");
    }
  };

  const markListingSold = (listing) => {
    const soldUrl = `${process.env.REACT_APP_swapshop_API_HOST}/listings/${listing.listings_id}`;
    listing.sold = true;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(listing),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    fetch(soldUrl, fetchConfig).then((result) => {
      if (result.ok) {
        setListings(listings.filter((listing) => listing.sold === true));
        loadWomens();
      } else {
        window.alert("Something went wrong. Listing was not marked as sold.");
      }
    });
  };

  const [search, setSearch] = useState("");
  useEffect(() => {
    loadWomens();
    loaduser();
  }, []);

  return (
    <div className="womens-container">
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
          <h2 className="display-5 fw-bold" style={{ color: "black" }}>
            Womens Items
          </h2>
        </div>
      </div>
      <hr className="hr hr-blurry" />
      <div className="col-md-12 text-center">
        <h2 className="display-6" style={{ color: "black" }}>
          Featured Items
        </h2>
      </div>
      <hr className="hr hr-blurry" />
      <Carousel responsive={responsive}>
        {listings
          .filter(
            (listing) =>
              listing.name.toLowerCase().includes("shirt") ||
              listing.name.toLowerCase().includes("pants")
          )
          .filter((listing) => listing.sold == false)
          .filter((listing) => listing.seller_id !== user)
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
                      &nbsp;&nbsp;&nbsp;
                      <div>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            markListingSold(listing);
                          }}
                        >
                          Buy!
                        </Button>
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
        <h2 className="display-6" style={{ color: "black" }}>
          Full Collection
        </h2>
      </div>
      &nbsp;&nbsp;&nbsp;
      {listings
        .filter((listing) =>
          listing.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((listing) => listing.sold == false)
        .filter((listing) => listing.seller_id !== user)
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
                      &nbsp;&nbsp;&nbsp;
                      <div>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            markListingSold(listing);
                          }}
                        >
                          Buy!
                        </Button>
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
export default WomensPage;
