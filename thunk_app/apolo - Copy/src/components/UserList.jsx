import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

const UserList = () => {

    const dispatch = useDispatch()
    const {data , status} = useSelector(state => state.users)

    console.log('data' , data);
    console.log('status' , status);
    
    useEffect(() => {
        dispatch(fetchUsers())
    } , [dispatch])

    if(status === 'loading'){
        return <p>Loading...........</p>
    }

  return (
    <>
    <div>UserList</div>
    <ul>
        {
            // data.map((user) => {
            //     <li key={user.id}>{user.firstName}</li>
            // })
        }
    </ul>
    </>
  )
}

export default UserList