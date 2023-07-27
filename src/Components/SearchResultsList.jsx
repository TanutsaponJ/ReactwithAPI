/* eslint-disable no-unused-vars */

import React from "react";
import SearchResults from "./SearchResults";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, index) => {
        return <SearchResults result={result} key={index} />;
      })}
    </div>
  );
};
