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
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTask}>Add Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <div>
        <input
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
        />
        <button onClick={handleCustomTaskSubmit}>Submit</button>
      </div>
      <UseMemo tasks={tasks} />
      <ReactMemo counter={counter} />
    </div>
  );
};

export default App;
