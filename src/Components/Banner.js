import React from "react";
import "../Styles/App.css";

const Banner = ({ data }) => {
  return (
    <div className="singleStore shadow">
      <h1>{data.website} </h1>
      <p>{data.name} </p>
      <p>Price: {data.price}</p>
    </div>
  );
};

export default Banner;
