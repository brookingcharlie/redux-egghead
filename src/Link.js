import React from 'react';

const Link = ({active, onClick, children}) => (
  (active)
  ? <span className="active">{children}</span>
  : <a href="#" onClick={(e) => {e.preventDefault(); onClick();}}>{children}</a>
);

export default Link;
