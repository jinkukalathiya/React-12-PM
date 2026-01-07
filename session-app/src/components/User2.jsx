import React from "react";

function User2({ formData, setFormData, next, prev }) {
  return (
    <>
      <div>
        <h2>Educational Detail</h2>

        <input
          type="text"
          placeholder="Enter Your Course"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Your Sub Topic Name"
          value={formData.subtopic}
          onChange={(e) => setFormData({ ...formData, subtopic: e.target.value })}
        />

        <div>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>

      </div>
    </>
  );
}

export default User2;
