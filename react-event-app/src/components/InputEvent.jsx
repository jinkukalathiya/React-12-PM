import React, { useState } from "react";

function InputEvent() {
  const [name, setName] = useState();

  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <div>
      <h1>OnChange Event</h1>
      <label>Name :</label>
      <input placeholder="Enter Your Name" onChange={handleChange}/>
      <p>My Name is : {name}</p>
    </div>
  );
}

export default InputEvent;
