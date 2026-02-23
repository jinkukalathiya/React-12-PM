import React from "react";
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
        <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => {
            setName(e.target.value);
            }}
        />
        <h3>Hello,{name || " Guest"} </h3>
    </div>
  );
}

export default NameInput;
