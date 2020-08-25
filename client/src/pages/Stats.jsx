import React from 'react';

const Stats = () => {
  return (
    <div style={{ position: 'relative', width: 600, height: 550 }}>
      <h1>You've been productive lately!</h1>
      <h3>Heres your progress!</h3>
      <Line
        options={{
          responsive: true
        }}
        data={data}
      />
    </div>
  );
};

export default Stats;
