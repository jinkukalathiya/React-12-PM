import React from "react";

function User3({ formData, prev }) {
  return (
    <>
      <div>
        <h2>View Data</h2>

        <p>Name : {formData.name}</p>
        <p>Phone Number : {formData.phone}</p>
        <p>Age : {formData.age}</p>
        <p>Course Name : {formData.course}</p>
        <p>Sub Topic : {formData.subtopic}</p>

        <div>
            <button onClick={prev}>Previous</button>
        </div>

        <button onClick={() => alert("Form Data Submitted Successfully..!!!")}  >Submit</button>

      </div>
    </>
  );
}

export default User3;
