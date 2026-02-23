import React, { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case "Increment":
            return state + 1;

        case "Decrement":
            return state - 1;

        case "Reset":
            return 0;

        default:
            return state;
    }


}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer,0);

    return (
        <div>
            <h1>Count : {count}</h1>

            <button onClick={() => dispatch({type: "Increment"})} >+</button>
            <button onClick={() => dispatch({type: "Decrement"})} >-</button>
            <button onClick={() => dispatch({type: "Reset"})} >Reset</button>
        </div>
    )
}

export default UseReducer;