import React, {useState} from "react";
import './CounterApp.css';

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const increment = (step) => () => setCount(count + step);
    return (
        <div className="counter-app">
            <h1 className="value">{count}</h1>
            <button onClick={increment(1)}>+</button>
            &nbsp;
            <button onClick={increment(-1)}>-</button>
        </div>
    )
}
export default CounterApp