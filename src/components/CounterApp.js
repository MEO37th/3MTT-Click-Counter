import React, { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  // Set up the state using useState hook
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  
  // Define the maximum threshold
  const MAX_THRESHOLD = 10;
  
  // Implement the increase function
  const handleIncrease = () => {
    if (count < MAX_THRESHOLD) {
      setCount(count + 1);
      if (count + 1 === MAX_THRESHOLD) {
        setMessage("You've reached the limit!");
      }
    }
  };
  
  // Implement the decrease function
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    }
  };

    // Implement the reset function
  const handleReset = () => {
  setCount(0);
  setMessage('');
};
  
  //  Return the JSX for the component
  return (
    <div className="counter-container">
      <h1>3MTT Click Counter</h1>
      
      <div className="counter-display">
        <span>{count}</span>
      </div>
      
      <div className="button-container">
        <button className="counter-button decrease" onClick={handleDecrease}>-</button>
        <button className="counter-button increase" onClick={handleIncrease}>+</button>
      </div>
      <button className="counter-button reset" onClick={handleReset}>R</button>
      {message && <p className="threshold-message">{message}</p>}
    </div>
  );
}

export default CounterApp;
