import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewEmployee() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("Employees"))) || [];
  }, []);

  const deleteEmp = (id) => {
    const updatedEmp = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmp);
    localStorage.setItem("Employees",JSON.stringify(updatedEmp));
  }

  return (
    <>      
        <h1>View Employee</h1>
        <table border={1} cellPadding={10} cellSpacing={0} align="center">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Image</th>
              <th>Employee Name</th>
              <th>Employee Department</th>
              <th>Employee Designation</th>
              <th>Employee Salary</th>
              <th>Employee Email ID</th>
              <th>Employee Phone Number</th>
              <th>Employee Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.eid}</td>
                  <td>{emp.image && <img src={emp.image} width="50"/>}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.department}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.status}</td>
                  <td>
                    <Link to={`/edit/${emp.id}`}>Edit</Link>
                    <button onClick={() => deleteEmp(emp.id)} style={{marginLeft:"10px", backgroundColor: "transparent", color: "crimson", fontWeight:"700", border: "none", outline: "none"}}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </>
  )
}

export default ViewEmployee
