import React, { useEffect, useState } from "react";

function Cards() {
  //   const [loaded, setLoaded] = useState([]);
  //   const [error, setError] = useState(false);

  //   const LoadProducts = async () => {
  //     const response = await fetch(
  //       `$process.env.REACT_APP_swapshop_API_HOST}/https://fakestoreapi.com/products`
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setLoaded(data.loaded);
  //     } else {
  //       console.setError({ error: true });
  //     }
  //   };
  //   useEffect(() => {
  //     LoadProducts();
  //   }, []);
  // const [productData, setProductData] = useState({});

  // useEffect(() => {
  //   getProductUserWithFetch();
  // }, []);

  // const getProductUserWithFetch = async () => {
  //   const response = await fetch(apiUrl);
  //   const jsonData = await response.json();
  //   setProductData(jsonData);
  // };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="..."
        alt="Card image Kappa"
      />
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Category</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">This is a group uitem</li>
        <li className="list-group-item">This is a group uitem</li>
        <li className="list-group-item">This is a group uitem</li>
      </ul>
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
