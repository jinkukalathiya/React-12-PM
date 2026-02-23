import React, { useEffect, useState } from 'react'
import './App.css'
import withLoader from './hoc/withLoader';
import UserData from './components/UserData';

const UserWithLoader = withLoader(UserData);

function App() {
  
  const [loading, setLoading] = useState(true);
  const [unLoad, setUnLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  return (
    <>
      <UserWithLoader 
        isLoading={loading}
        name="Jinkal Kalathiya"
        email="rnw1webjinkal@gmail.com"
      />
      <UserWithLoader 
        isLoading={unLoad}
        name="Hansa Der"
        email="hansader@gmail.com"
      />
    </>
  )
}

export default App
