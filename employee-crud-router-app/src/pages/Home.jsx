import React, { useEffect, useState } from 'react'

function Home() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("Employees")) || [] );
  },[]);

  return (
    <>      
        <h1>Home Page</h1>
        <h2>Employee Management System</h2>
        <div style={{display:'flex', flexWrap: 'wrap', gap: "20px", justifyContent: "center"}}>
          { 
            employees.map(emp => (
              <div style={{ width: "20%", backgroundColor:"white", borderRadius: "10px",overflow:"hidden", textAlign: "center"}}>
                {emp.image && <img src={emp.image} width="300" />}
                <h3>{emp.ename}</h3>
                <p>{emp.email}</p>
                <p>{emp.phone}</p>
                <p>{emp.department}</p>
                <p>{emp.designation}</p>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Home
