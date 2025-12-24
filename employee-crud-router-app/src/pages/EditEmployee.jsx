import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [emp, setEmp] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Employees")) || [];
    setEmp(data.find((e) => e.id === Number(id)));
  }, [id]);

  const handleChange = (e) => {
    setEmp({
      ...emp, 
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("Employees")) || [];
    const updatedEmp = data.map(e => e.id === emp.id ? emp : e);
    localStorage.setItem("Employees",JSON.stringify(updatedEmp));
    navigate('/view');  
  }

  return (
    <>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <table border={1} cellPadding={10} cellSpacing={0} align="center">
          <tr>
            <td>
              <label>Employee Name : </label>
            </td>
            <td>
              <input
                type="text"
                name="ename"
                value={emp.ename || ""}
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
                value={emp.email || ""}
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
                value={emp.phone || ""}
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
                value={emp.department || ""}
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
                value={emp.designation || ""}
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
                value={emp.salary || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Employee Status : </label>
            </td>
            <td>
              <select name="status" value={emp.status || ""} onChange={handleChange}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
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
                Update Employee
              </button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default EditEmployee;
