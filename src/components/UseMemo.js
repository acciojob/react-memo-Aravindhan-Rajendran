import React, { useMemo, useState } from 'react';

const UseMemo = ({ tasks }) => {
  const [count, setCount] = useState(0);
  
  // Memoizing the tasks to avoid unnecessary re-renders
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const handleIncrement = () => {
    setCount(0); // Set count to 0 on every button click
  };

  return (
    <div>
      <p>
        Count:{count}
        <button id="calc" onClick={handleIncrement}>+</button>
      </p>
      <h2>Expensive Calculation</h2>
      <p>1{count}</p>
    </div>
  );
};

export default UseMemo;
