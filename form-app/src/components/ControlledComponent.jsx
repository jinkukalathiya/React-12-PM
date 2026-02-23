import React, { useEffect, useState } from "react";

function ControlledComponent() {

    const [name, setName] = useState("");
    
    return(
        <>
            <h2>Controlled Component</h2>
            <label htmlFor="">Name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name"/>
            <p>My Name is : {name}</p>
        </>
    )
}

export default ControlledComponent;