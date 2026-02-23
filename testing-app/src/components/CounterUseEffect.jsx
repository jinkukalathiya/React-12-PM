import React, { useEffect, useState } from "react";

function CounterUseEffect(){
    const [count, setCount]  = useState(0);

    useEffect(()=>{
        console.log("Counted....")
    },[count])

    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default CounterUseEffect;