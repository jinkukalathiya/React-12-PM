import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewEmployee() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("Employees"))) || [];
  }, []);

  const searchEmployee = employees.filter(emp => emp.ename.toLowerCase().includes(search.toLowerCase()));
  console.log(searchEmployee);
  
  const filterEmployee = employees.filter(emp => statusFilter === "All" || emp.status === statusFilter);

  const sortEmployee = employees.sort((a,b) => {
    if(sort === "name-a"){
      return a.ename.localeCompare(b.ename);
    }
    if(sort === "name-z"){
      return b.ename.localeCompare(a.ename);
    }
    if(sort === "salary-l"){
      return a.salary - b.salary;
    }
    if(sort === "salary-h"){
      return b.salary - a.salary;
    }
  })
  

  const deleteEmp = (id) => {
    const updatedEmp = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmp);
    localStorage.setItem("Employees",JSON.stringify(updatedEmp));
  }

  return (
    <>      
        <h1>View Employee</h1>
        <div style={{textAlign: "center", margin: "20px auto"}}>
            <input type="text" placeholder='Search by Employee Name' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div style={{textAlign: "center", margin: "20px auto"}}>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
        </div>

         <div style={{textAlign: "center", margin: "20px auto"}}>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="name-a">Name A-Z</option>
              <option value="name-z">Name Z-A</option>
              <option value="salary-l">Salary Low-High</option>
              <option value="salary-h">Salary High-Low</option>
            </select>
        </div>

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


            {/* {
              search ? 
                searchEmployee.map(emp => (
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
              :
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
            } */}

            {/* {
              statusFilter ? 
                filterEmployee.map(emp => (
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
              :
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
            } */}

            {
              sort ? 
                sortEmployee.map(emp => (
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
              :
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

            {/* {               
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
            }               */}
          </tbody>
        </table>
    </>
  )
}

export default ViewEmployee
