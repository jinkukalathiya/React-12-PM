import React from "react";

function User1({ formData, setFormData, next }) {
  return (
    <>
      <div>
        <h2>Personal Detail</h2>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <input
          type="number"
          placeholder="Enter Your Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />

        <button onClick={next}>Next</button>

      </div>
    </>
  );
}

export default User1;
