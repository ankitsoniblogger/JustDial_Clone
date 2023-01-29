import React from "react";
import "./search.css";

const Search = () => {
  const SearchBox = () => {
    return (
      <div className="searchbox">
        <input type="text" placeholder="Search services near Me!" />
        <i className="fa-sharp fa-solid fa-magnifying-glass search__icon"></i>
      </div>
    );
  };
  return (
    <div className="search">
      <div className="heading">
        <h1>Search across `3.4 Crore+ Business`</h1>
        <SearchBox />
      </div>
      <div className="download_btn">
        <button>Download App</button>
      </div>
    </div>
  );
};

export default Search;
