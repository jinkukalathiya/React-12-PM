import React from "react";

function CourseList(){

    const courses = ["HTML","Css","Media","Bootstrap","DSA with C++", "Javascript", "React JS", "Node JS"];
    
    return(
        <div>
            <h1>List in React</h1>
            <ul>
                {
                    courses.map((course,index) => (
                            <li key={index}>{course}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CourseList;