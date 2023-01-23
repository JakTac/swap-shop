import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { getAccountId } from "./Token";


function ProfilePage() {
  const [listings, setListing] = useState([]);
  const loadListing = async () => {
    const user = await getAccountId()
    const url = `${process.env.REACT_APP_swapshop_API_HOST}/listings/sellers/${user}`;
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


   const markListingSold = (listing) => {
      const soldUrl = `${process.env.REACT_APP_swapshop_API_HOST}/listings/${listing.listings_id}`;
        listing.sold = true
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(listing),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        }
        fetch(soldUrl, fetchConfig)
            .then(result => {
                if (result.ok) {
                    setListing(listings.filter(listing => listing.sold === true))
                    loadListing()
                } else {
                    window.alert("Something went wrong. Listing was not marked as sold.")
                }
            }
            )
    }

  return (
    <div className="jewelry-container">
      <div className="col-md-12 text-center">
        <h2 className="display-5" style={{ color: "black" }}>My Listings</h2>
      </div>
      <Container>
        {listings
          .filter((listing) =>
            listing.sold === false)

          .map((listing) => (
            <Col style={{ color: "black" }} key={listing.listings_id}>
              <div className="card">
                <Card>
                  <Card.Img src={listing.image_url} height="500" width="500" />
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
                      <Button variant="primary" onClick={() => {markListingSold(listing)}}>Mark as Sold</Button>
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
