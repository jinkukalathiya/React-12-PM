import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const user = useContext(UserContext);

    return(
        <>
            <h1>Profile Page</h1>
            <p>User : {user}</p>
        </>
    )
}

export default Profile;
