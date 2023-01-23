import React, { useState, useEffect } from "react";
import { Card, Col, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { getAccountId } from "./Token";


function SaleHistory() {
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

  return (
    <div className="jewelry-container">
      <div className="col-md-12 text-center">
        <h2 className="display-5" style={{ color: "black" }}>Sale History</h2>
      </div>
      <Container>
        {listings
          .filter((listing) =>
            listing.sold === true)

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

export default SaleHistory;
