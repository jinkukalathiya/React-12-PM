import React, { useEffect, useState } from "react";

export default function CrudLocalStorage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [students, setStudents] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    // Load Data from Local Storage
    useEffect(() => {
        const record = JSON.parse(localStorage.getItem("StudentsList")) || [];
        
        setStudents(record);
    },[]);

    // Save Data in Local Storage
    useEffect(() => {
        localStorage.setItem("StudentsList",JSON.stringify(students));
    },[students]);

    

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !email){
            return alert("Please Fillout all Fields..!");
        }

        if(editIndex === null){
            setStudents([...students, {name, email}]);
            alert("Record Inserted SuccessFully..!");
        }
        else{
            const record = [...students];
            console.log(record);
            record[editIndex] = {name, email};
            setStudents(record);
            setEditIndex(null);
            alert("Record Updated SuccessFully..!");
        }
        
        setName("");
        setEmail("");
    }

    function handleEdit(index) {
        setName(students[index].name);
        setEmail(students[index].email);
        setEditIndex(index);
    }

    function handleDelete(index) {
        const record = students.filter(i => i !== index);
        setStudents(record);
    }


    return (
        <>
            <h1>Local Storage CRUD Operation</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <label>First Name :</label>
                <input type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                <br/>
                <br/>
                <label>Email I'D :</label>
                <input type="text" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <br/>
                <button>Add</button>
            </form>
            <h1>Local Storage Data View</h1>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
                {
                    students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => {handleEdit(index)}} >Edit</button> ||
                                <button onClick={() => {handleDelete(index)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                <tr></tr>
            </table>
        </>
    );
}
