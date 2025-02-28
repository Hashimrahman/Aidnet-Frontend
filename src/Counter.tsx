import React from "react";
import { useCounterState } from "./Store/useStore";

const Counter: React.FC = () => {
    const { count , increment, decrement, reset } = useCounterState()
    return(
        <div>
            <h2>Counter : {count}</h2>
            <button className="border py-2 px-4 m-4" onClick={increment}>Increment</button>
            <button className="border py-2 px-4 m-4" onClick={decrement}>decrement</button>
            <button className="border py-2 px-4 m-4" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter