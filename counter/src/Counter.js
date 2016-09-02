import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1 className="value">{value}</h1>
    <button className="increment" onClick={onIncrement}>Increment</button>
    <button className="decrement" onClick={onDecrement}>Decrement</button>
  </div>
);

export default Counter;
