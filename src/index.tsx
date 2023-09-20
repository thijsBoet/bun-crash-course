import React, { useState } from 'react';
import {createRoot} from 'react-dom'

const root = createRoot(document.getElementById('root')!)

const App = () => {
  const [count, setCount] = useState(0)
  return (
		<div>
			<h1>Hello to Bun 1.0 🚀 World!</h1>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(0)}>reset</button>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
  );
}

root.render(< App />);