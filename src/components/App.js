import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const addTask = () => {
    // Ensure "New Todo" is added once
    if (!tasks.includes('New Todo')) {
      setTasks((prevTasks) => [...prevTasks, 'New Todo']);
    }
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setTasks((prevTasks) => [...prevTasks, customTask]);
      setCustomTask('');
    }
  };

  return (
    <div id="main">
      <h1>Task Manager</h1>
      <button id="add-todo-btn" onClick={addTask}>Add Todo</button>
      <button id="incr-cnt" onClick={incrementCounter}>Increment Counter</button>
      <div>
        <input
          id="skill-input"
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
        />
        <button id="skill-btn" onClick={handleCustomTaskSubmit}>Add Skill</button>
      </div>
      <UseMemo tasks={tasks} />
      <ReactMemo counter={counter} />
    </div>
  );
};

export default App;
