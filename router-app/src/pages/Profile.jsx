import React from "react"
import { useLocation } from "react-router-dom"

function Profile() {

    const location = useLocation();
    const data = location.state;

    return (
        <>
            <div>
                <h1>Profile Page</h1>    
                {
                    data ? (
                        <>
                            <p>Name : {data.name}</p>
                            <p>Email : {data.email}</p>
                            <p>Course : {data.course}</p>
                        </>
                    ) : (
                        <>
                            <p>No Data Found...</p>
                        </>
                    )
                }   
            </div>
        </>
    )
}

export default Profile
