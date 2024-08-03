import React, { useMemo } from 'react';

const UseMemo = ({ tasks }) => {
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {memoizedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
