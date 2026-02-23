import React, { useState } from "react";

function Counter() {

    const [count, setCount ] = useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }

    return(
        <div>
            <h1>OnClick Event</h1>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter;