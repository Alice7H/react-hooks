import React, {useState} from 'react'

export default function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    // useState with previous state
    const incrementFive = () => {
        for(let i=0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}
