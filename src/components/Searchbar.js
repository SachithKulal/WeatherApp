import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar(props) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(city);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        className="textbox"
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
