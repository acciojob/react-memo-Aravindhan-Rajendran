import React from 'react';

const ReactMemo = React.memo(({ counter }) => {
  console.log('ReactMemo re-rendered');

  return (
    <div>
      <h2>Counter: {counter}</h2> {/* Ensure this displays the counter correctly */}
    </div>
  );
});

export default ReactMemo;
