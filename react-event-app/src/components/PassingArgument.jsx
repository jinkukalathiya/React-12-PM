import React from "react";

function PassingArgument(){

    function showId(id){
        alert(`Pass Gr Id is ${id}`);
    }
    return(
        <div>
            <h1>Passing Argument</h1>

            <button onClick={() => showId(8453)}>Pass GR ID 1</button>
            <button onClick={() => showId(7934)}>Pass GR ID 2</button>
        </div>
    )
}

export default PassingArgument;
