import React, { useState } from "react";

const Searchbar = ({ onSearchSubmit }) => {
  const [value, setValue] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    onSearchSubmit(value);
  }

  return (
    <div>
      <h4>Search User to Add</h4>
      <input
        placeholder="Enter User id"
        value={value}
        type="text"
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Searchbar;
