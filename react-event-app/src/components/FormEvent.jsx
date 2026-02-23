import React from "react";

function FormEvent(){

    function handleSubmit(e){
        e.preventDefault();
        alert("Form Submitted Successfully....");
    }

    return(
        <div>
            <h1>OnSubmit Event</h1>
            <form onSubmit={handleSubmit}>  
                <input placeholder="Enter Your Name"/>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormEvent;