import React, { useEffect, useState } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clock = setInterval(() => {
            setTime(new Date());
        },1000);

    },[]);

    return (
        <h2>Current Time : {time.toLocaleTimeString()}</h2>
    )

}

export default DigitalClock;