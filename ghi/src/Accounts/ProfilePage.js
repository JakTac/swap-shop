import React, { useState, useEffect } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { getAccount } from "./Token";

// src="https://freesvg.org/img/abstract-user-flat-4.png"
//             alt="avatar"
//             className="rounded-circle"
//             style={{ width: "150px" }}
//             fluid
//  credentials: "include",
// const sellListing = async() => {

//   const [ sold, setSold ] = useState([])

//   const sellUrl = `${process.env.REACT_APP_swapshop_API_HOST}/listings/`;
//   const soldUrl = `${process.env.REACT_APP_swapshop_API_HOST}/listings/{listing_id}`;
//   const response = await fetch(sellUrl);

//   if (response.ok) {
//     const data = await response.json();
//     setSold(data.sold);
//   } else {

//   }
// }

//  credentials: "include"

function ProfilePage() {
  const user = getAccount();
  console.log(user);
  // const id = user["account"]["id"];
  // console.log(id);
  const navigate = useNavigate();

  const [listings, setListing] = useState([]);
  const loadListing = async () => {
    const url = `${process.env.REACT_APP_swapshop_API_HOST}/listings/`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setListing(data);
    } else {
      console.error("Error in fetching token, try again.");
    }
  };
  useEffect(() => {
    loadListing();
  }, []);

  return (
    <div className="jewelry-container">
      <div className="col-md-12 text-center">
        <h2 className="display-5" style={{ color: "black" }}></h2>
      </div>
      <Container>
        {listings
          .filter((listing) => listing.seller_id === id)
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
      </Container>
    </div>
  );
}

export default ProfilePage;
