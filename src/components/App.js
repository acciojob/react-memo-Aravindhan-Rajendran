import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, 'New todo']);
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
      <button id="incr-cnt" onClick={incrementCounter}>0</button>
      <div>
        <input
          id="skill-input"
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
        />
        <button id="submit-custom-task" onClick={handleCustomTaskSubmit}>Submit</button>
      </div>
      <UseMemo tasks={tasks} />
      <ReactMemo counter={counter} />
    </div>
  );
};

export default App;
