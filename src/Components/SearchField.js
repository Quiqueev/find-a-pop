import React from "react";
import "../Styles/App.css";
import { useState } from "react";

const SearchField = ({ changeShow, changeUrl }) => {
  // Searched Input
  const [popInput, setPopInput] = useState("");

  // Called on Form, prevent website from refreshing on submit
  const handleSubmit = e => {
    e.preventDefault();
  };

  // When search button is clicked
  // ChangeShow -> Show banners with results
  // changeUrl -> triggers useEffect on App.js which fetches results from API
  const onClickButton = () => {
    //changeShow(true);
    changeUrl(popInput);
  };

  return (
    <div>
      <div className="displayInput">
        <h1 className="searchPop"> {'"' + popInput + '"' || "Type a Pop"} </h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            className="searchBar"
            type="text"
            placeholder="Enter a funko pop"
            onChange={e => setPopInput(e.target.value)}
          />
        </div>
        <div>
          <button className="searchButton" onClick={() => onClickButton()}>
            find
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
