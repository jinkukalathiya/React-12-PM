import { useEffect, useState } from "react";

function Session() {
  const [name, setName] = useState(() => {
    return sessionStorage.getItem("NameList") || "No Data Found..!";
  });

  useEffect(() => {
    sessionStorage.setItem("NameList", name);
  }, [name]);
  return (
    <>
      <h1>Data Store Using Session Storage</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>My Name is : {name}</p>
    </>
  );
}

export default Session;
