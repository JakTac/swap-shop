import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { getAccountId } from "./Token";

function SaleHistory() {
  const [listings, setListing] = useState([]);
  const loadListing = async () => {
    const user = await getAccountId();
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
    <div className="requested-container">
      <div className="col-md-12 text-center">
        <h2 className="display-5" style={{ color: "black" }}>
          Requested Items
        </h2>
      </div>
      {listings
        .filter((listing) => listing.sold === true)

        .map((listing) => (
          <div className="card-columns" key={listing.listings_id}>
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

export default SaleHistory;
