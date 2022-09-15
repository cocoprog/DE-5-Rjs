import { useState } from "react"

export function Counters () {
    const stock = 5
    const [count, setCount] = useState(0)

    // const decreaseCount = () => {setCount (count => count -1)}
    // const increaseCount = () => {setCount (count => count +1)}
    const increaseCount = () => count < stock ? setCount (count +1) : alert (`se alcanzo el maximo de stock disponible`)
    const decreaseCount = () => count > 0 ? setCount (count -1) : alert (`no se pueden introducir valores negativos`)

    return (
        <div className="counters-container">
            <button onClick={decreaseCount}> Restar</button>
            <span>{count}</span>
            <button onClick={increaseCount}> Sumar </button>
        </div>
    )
}