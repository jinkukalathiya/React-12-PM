import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addStudent, deleteStudent, updateStudent} from "../features/studentSlice"

const StudentCard = () => {
    const dispatch = useDispatch();

    const students = useSelector((state) => state.students.studentList);
    console.log(students);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState();
    const [editId, setEditId] = useState(null);

    const handleAdd = (e) => {

        e.preventDefault();
        if(!name || !email || !course || !age){
            alert("Please Fill All Fields...");
        }

        dispatch(
            addStudent({
                id: Date.now(),
                name : name,
                email : email,
                course: course,
                age: age
            })
        )

        setName("");
        setEmail("");
        setCourse("");
        setAge("");
    };
    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
    };
    const handleEdit = (student) => {
        setEditId(student.id);
        setName(student.name);
        setEmail(student.email);
        setAge(student.age);
        setCourse(student.course);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            updateStudent({
                id: editId,
                name : name,
                email : email,
                course: course,
                age: age
            })
        )
        console.log("Record Updated...")
        setEditId(null)
        setName("");
        setEmail("");
        setCourse("");
        setAge("");
    };


    return (
        <>
            <div>
                <h1>Student Card Form</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="">Student Name :</label>
                        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Student Email :</label>
                        <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Student Age :</label>
                        <input type="number" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Student Course Name :</label>
                        <input type="course" placeholder="Enter Your Course" value={course} onChange={(e) => setCourse(e.target.value)} />
                    </div>
                    <div>
                        {
                            editId ? (
                                <button onClick={handleUpdate}>Update</button>
                            ) : (
                                <button onClick={handleAdd}>Add</button>
                            )
                        }
                    </div>
                </form>
                <h1>Student Card Data Table</h1>
                {
                    students.length === 0 ? (
                        <p>No Student Data</p>
                    ) : (
                         <table border={1} cellSpacing={0} cellPadding={5}>
                            <tr>
                                <td>Student ID</td>
                                <td>Student Name</td>
                                <td>Student Email</td>
                                <td>Student Course Name</td>
                                <td>Student Age</td>
                                <td>Actions</td>
                            </tr>
                            {
                                students.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.course}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            <button onClick={() => handleEdit(student)}>Edit</button> || <button onClick={() => handleDelete(student.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                         </table>
                    )
                }
            </div>
        </>
    )
}

export default StudentCard;