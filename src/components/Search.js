import React from 'react';

const Search = ({term, onChange}) => (
  <input className="Search"
         type="text"
         value={term}
         placeholder="Search..."
         onChange={(e) => onChange(e.target.value)} />
);

export default Search;
