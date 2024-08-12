import React, { useState, useCallback } from 'react';

const ReactMemo = React.memo(({ counter }) => {
  console.log('ReactMemo re-rendered');
  
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddSkill = () => {
    if (inputData.trim()) {
      setItems((prevItems) => [...prevItems, inputData]);
      setInputData(''); // Clear input after adding
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input 
        type="text" 
        value={inputData}
        onChange={handleInputChange}
      />
      <button id="item-jumbotron" onClick={handleAddSkill}>jumbotron</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
