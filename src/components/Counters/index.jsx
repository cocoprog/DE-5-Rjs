import { useState } from "react"

export function Counters () {
    const [count, setCount] = useState(0)

    const decreaseCount = () => {setCount (count => count -1)}
    const increaseCount = () => {setCount (count => count +1)}

    return (
        <div className="counters-container">
            <button onClick={decreaseCount}> Restar</button>
            <span>{count}</span>
            <button onClick={increaseCount}> Sumar </button>
        </div>
    )
}