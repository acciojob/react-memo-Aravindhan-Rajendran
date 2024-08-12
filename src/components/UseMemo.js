import React, { useMemo, useState } from 'react';

const UseMemo = ({ tasks }) => {
  const [count, setCount] = useState(0);
  
  // Memoizing the tasks to avoid unnecessary re-renders
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 0);
  };

  return (
    <div>
      <p>
        Count: {count}
        <button id="calc" onClick={handleIncrement}>+</button>
      </p>
      <h2>Tasks List</h2>
      <ul id="task-list">
        {memoizedTasks.map((task, index) => (
          <li key={index} id={`todo-${index}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
