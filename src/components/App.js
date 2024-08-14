import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  // Add a new task "New Todo"
  const addTask = () => {
    const newTask = `New Todo ${tasks.length + 1}`; // Ensure unique task names
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Increment the counter
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Handle custom task input change
  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  // Add a custom task if the input length is greater than 5
  const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setTasks((prevTasks) => [...prevTasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task should be more than 5 characters!');
    }
  };

  return (
    <div id="main">
      <h1>Task Manager</h1>

      {/* Button to add "New Todo" */}
      <button id="add-todo-btn" onClick={addTask}>
        Add Todo
      </button>

      {/* Button to increment counter */}
      <button id="incr-cnt" onClick={incrementCounter}>
        Increment Counter: {counter}
      </button>

      {/* Input for custom tasks */}
      <div>
        <input
          id="skill-input"
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
          placeholder="Enter a custom task"
        />
        <button id="skill-btn" onClick={handleCustomTaskSubmit}>
          Add Skill
        </button>
      </div>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} id={`todo-${index}`}>{task}</li>
        ))}
      </ul>

      {/* Rendering UseMemo and ReactMemo components */}
      <UseMemo tasks={tasks} />
      <ReactMemo counter={counter} />
    </div>
  );
};

export default App;