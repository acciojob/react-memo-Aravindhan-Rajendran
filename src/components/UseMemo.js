import React, { useMemo, useState } from 'react';

const UseMemo = ({ tasks }) => {
  const [count, setCount] = useState('');

  // Memoizing the tasks to avoid unnecessary re-renders
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const handleIncrement = () => {
    // Add a large number of zeros to the count
    setCount((prevCount) => prevCount + '0'); // Append '0' to the existing count
  };

  return (
    <div>
      <p>
        Count: {count}
        <button id="calc" onClick={handleIncrement}>+</button>
      </p>
      <h2>Expensive Calculation</h2>
      <p>1{count}</p>
    </div>
  );
};

export default UseMemo;
