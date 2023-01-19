import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function WomensPage() {
  const [listings, setListings] = useState([]);
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

  const [search, setSearch] = useState("");
  useEffect(() => {
    loadWomens();
  }, []);

  return (
    <div className="womens-container">
      <div className="col-md-12 text-center">
        <h2 className="display-5 fw-bold" style={{ color: "black" }}>
          Womens Items
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
      {/* <div className="container">
        <div className="col-md-12 text-center">
          <table className="table table-striped">
            <thead>
              <tr style={{ color: "black" }}>
                <th>Image</th>
                <th>Name</th>
                <th>Condition</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {listings
                .filter((listing) =>
                  listing.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((listing) => (
                  <tr style={{ color: "black" }} key={listing.listings_id}>
                    <td>
                      <img
                        src={listing.image_url}
                        height="400"
                        width="600"
                      ></img>
                    </td>
                    <td>{listing.name}</td>
                    <td>{listing.condition}</td>
                    <td>${listing.price}</td>
                    <td>{listing.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
           {listings
                .filter((listing) =>
                  listing.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((listing) => (
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item>{listing.name}</ListGroup.Item>
                  <ListGroup.Item>{listing.condition}</ListGroup.Item>
                  <ListGroup.Item>{listing.price}</ListGroup.Item>
                  <ListGroup.Item>{listing.description}</ListGroup.Item>
                 </ListGroup>
                ),

          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WomensPage;
