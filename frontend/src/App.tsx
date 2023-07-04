import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    fetch('/api').then((data) => console.log(data));
  });

  return (
    <div>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}

export default App;
