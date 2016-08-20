import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({visibility, onSetVisibilityFilter}) => {
  return (
    <p>
      Show:{' '}
      <FilterLink
          filter="SHOW_ALL"
          currentFilter={visibility}
          onClick={onSetVisibilityFilter}
        >All</FilterLink>{' '}
      <FilterLink
          filter="SHOW_ACTIVE"
          currentFilter={visibility}
          onClick={onSetVisibilityFilter}
        >Active</FilterLink>{' '}
      <FilterLink
          filter="SHOW_COMPLETED"
          currentFilter={visibility}
          onClick={onSetVisibilityFilter}
        >Completed</FilterLink>
    </p>
  );
};

export default Footer;
