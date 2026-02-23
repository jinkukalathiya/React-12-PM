import React from "react";

function UserData ( {name, email}){
    return (
        <>
            <div>
                <h3>User Information</h3>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
            </div>
        </>
    )
}

export default UserData;