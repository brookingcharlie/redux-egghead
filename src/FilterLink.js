import React from 'react';
import ReactDOM from 'react-dom';

const FilterLink = ({filter, currentFilter, onSetVisibilityFilter, children}) => (
  (filter === currentFilter)
  ? <span>{children}</span>
  : <a href="#" onClick={(e) => {
        e.preventDefault();
        onSetVisibilityFilter(filter);
      }}>
      {children}
    </a>
);

export default FilterLink;
