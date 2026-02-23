import React, { useEffect, useRef, useState } from "react";

function UnControlledComponent() {

    const nameRef = useRef();

    function handleSubmit() {
        alert("You Name is " + nameRef.current.value) ;
    }
    
    return(
        <>
            <h2>UnControlled Component</h2>
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" ref={nameRef} placeholder="Enter Your Name"/>
                <br/>
                <br/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default UnControlledComponent;