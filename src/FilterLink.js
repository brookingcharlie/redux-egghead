import React from 'react';
import ReactDOM from 'react-dom';

const FilterLink = ({filter, currentFilter, onClick, children}) => (
  (filter === currentFilter)
  ? <span>{children}</span>
  : <a href="#" onClick={(e) => {e.preventDefault(); onClick(filter);}}>{children}</a>
);

export default FilterLink;
