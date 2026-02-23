import React, { useState } from "react";

function StudentForm(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmt = () => {
        // alert(`Student Name : ${name}`);
        console.log(`Student Name : ${name}`);
        console.log(`Student Age : ${age}`);
        console.log(`Student Email : ${email}`);
        console.log(`Student Course : ${course}`);
    }

    return(
        <div>
            <h2>Student Registration Form</h2>
            <label>Name : </label>
            <input placeholder="Enter Your Name" onChange={(e) => {setName(e.target.value)}}/>
            <br/>
            <br/>
            <label>Age : </label>
            <input placeholder="Enter Your Age" onChange={(e) => {setAge(e.target.value)}}/>
            <br/>
            <br/>
            <label>Email : </label>
            <input placeholder="Enter Your Email I'D" onChange={(e) => {setEmail(e.target.value)}}/>
            <br/>
            <br/>
            <label>Course Name : </label>
            <input placeholder="Enter Your Course Name" onChange={(e) => {setCourse(e.target.value)}}/>
            <br/>
            <br/>
            <button onClick={handleSubmt}>Register</button>
        </div>
    )
}

export default StudentForm;