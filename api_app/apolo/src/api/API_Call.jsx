import React from 'react'
import { useEffect  , useState } from 'react'

const API_Call = () => {

    const[users , setUsers] = useState([])
    const[loading , setLoading] = useState(true)
    const[error , setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(response =>{
            if(!response.ok){
                throw new Error("Network response not ok");
            }
            return response.json()
        })
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    } , [])

    if(loading) return <p>Loading ..........</p>
    if(error) return <div>Error:{error}</div>


  return (
    <>
    <div className='heading'>API_Call</div>
    <ul>
        {
            users.map((user) => {
                return(
                    <li key={user.id}>{user.name}</li>
                )
            })
        }
    </ul>
    </>
  )
}

export default API_Call