import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const increment = () => {
        setCount(count + 1);
        setMessage(''); // Clear the message when incrementing
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setMessage(''); // Clear the message if count is greater than 0
        } else {
            setMessage('Count will not go below 0');
        }
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>
    );
};

export default Counter;

