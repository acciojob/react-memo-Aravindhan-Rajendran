import React from 'react';

const ReactMemo = React.memo(({ counter }) => {
  console.log('ReactMemo re-rendered');
  
  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  );
});

export default ReactMemo;
