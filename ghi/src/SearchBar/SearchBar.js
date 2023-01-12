import React from "react";

const SearchBar = ({ item, setItem }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="item1"
      value={item}
      placeholder={"Search Item"}
      onChange={(e) => setItem(e.target.value)}
    />
  );
};

export default SearchBar;
