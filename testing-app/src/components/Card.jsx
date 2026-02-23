import React from "react";

function Card({title, price}){
    return (
        <div>
            <h3>Title : {title}</h3>
            <p>Price : {price}</p>
        </div>
    )
}

export default Card;