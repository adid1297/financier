import React from "react";

import "../../styles/search-sort-widget.css";

const SearchSortWidget = () => (
  <div className="search-sort-container">
    <div className="search-container">
      <button className="search-button">
        <i class="fas fa-search" />
      </button>
    </div>
    <div className="sort-container">
      <button className="sort-button">
        <i class="fas fa-sort-amount-down-alt" />
      </button>
    </div>
  </div>
);

export default SearchSortWidget;
