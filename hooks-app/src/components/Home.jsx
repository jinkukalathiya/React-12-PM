import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home(){

    const user = useContext(UserContext);
    
    return(
        <>
            <h1>Hello World....!</h1>
            <h2>Home Page</h2>
            <p>User : {user}</p>
        </>
    )
}

export default Home;
