import React, { useState } from 'react';
import './App.css'

function App(){
	const [count, setCount] = useState(0);

	function increment(){
		setCount(count + 1);
	}

	function decrement(){
		setCount(count - 1);
	}

	return (
		<div className='container'>
			<h1>Counter App</h1>
			<h1>{count}</h1>
			<button onClick={increment}>+</button>&nbsp;
			<button onClick={decrement}>-</button>
		</div>
	)
}

export default App