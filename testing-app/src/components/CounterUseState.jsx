import React from "react";
import { useState } from "react";

function CounterUseState() {
    const [count, setCount] = useState(0);

    const decrement = () =>{
        setCount(count - 1);
    }
    const increment = () =>{
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={decrement}>Decrement</button>
            <h2>Count : {count}</h2>
            
            <button onClick={increment}>Increment</button>
        </div>
    )

}

export default CounterUseState;