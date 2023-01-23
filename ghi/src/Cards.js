import React, { useEffect, useState } from "react";

function Cards() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://images.squarespace-cdn.com/content/v1/61dcd32b3fb8bb4b5af9b560/0c9c14c4-6437-44d7-b5d5-c69ab3a31ef2/sustainable-mens-clothing.jpeg"
        alt="Card image Kappa"
      />
      <div className="card-body">
        <h5 className="card-title">Men's</h5>
        <p className="card-text">Items</p>
      </div>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Cards;
