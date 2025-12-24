import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    eid: "",
    ename: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    status: "Active",
    image: "",
  });

  const handleChange = (e) => {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setEmp({
        ...emp,
        image: reader.result
      })
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = JSON.parse(localStorage.getItem("Employees")) || [];

    localStorage.setItem(
      "Employees",
      JSON.stringify([...empData, { ...emp, id: Date.now() }])
    );
    navigate("/view");
  };

  return (
    <>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <table border={1} cellPadding={10} cellSpacing={0} align="center">
          <tr>
            <td>
              <label>Employee ID : </label>
            </td>
            <td>
              <input
                type="text"
                name="eid"
                placeholder="Enter Your Employee ID"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Name : </label>
            </td>
            <td>
              <input
                type="text"
                name="ename"
                placeholder="Enter Your Employee ID"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Email : </label>
            </td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Employee Email ID"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Phone Number : </label>
            </td>
            <td>
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Employee Phone Number"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Department : </label>
            </td>
            <td>
              <input
                type="text"
                name="department"
                placeholder="Enter Your Department"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Designation : </label>
            </td>
            <td>
              <input
                type="text"
                name="designation"
                placeholder="Enter Your Designation"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Salary : </label>
            </td>
            <td>
              <input
                type="text"
                name="salary"
                placeholder="Enter Your Salary"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Status : </label>
            </td>
            <td>
              <select name="status" onChange={handleChange}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Image : </label>
            </td>
            <td>
              <input type="file" name="image" onChange={handleImage}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                style={{
                  backgroundColor: "crimson",
                  color: "white",
                  display: "inline-block",
                  border: "none",
                  padding: "10px 20px",
                }}
              >
                Add Employee
              </button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default AddEmployee;
