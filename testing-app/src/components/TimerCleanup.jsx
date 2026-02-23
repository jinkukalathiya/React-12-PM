import React, { useEffect, useState } from "react";

function TimerCleanup() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Timer Started...");

        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        },5000);

        return() => {
            clearInterval(timer);
            console.log("Timer Stopped...");
        }
    },[])

    return (
        <h2>Timer Count : {count}</h2>
    )

}

export default TimerCleanup;