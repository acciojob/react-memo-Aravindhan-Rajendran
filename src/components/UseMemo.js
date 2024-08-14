import React, { useMemo, useState } from 'react';

const UseMemo = ({ tasks }) => {
  const [count, setCount] = useState('');

  // Memoizing the tasks to avoid unnecessary re-renders
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + '0'); // Append "0" to the current count
  };

  return (
    <div>
      <p>
        Count: {count}
        <button id="calc" onClick={handleIncrement}>+</button>
      </p>
      <h2>Expensive Calculation</h2>
      <p>1{count}</p> {/* This will display "1" followed by the current count (e.g., "100", "1000", etc.) */}
    </div>
  );
};

export default UseMemo;
