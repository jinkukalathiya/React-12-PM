import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPost(data));
  }, []);

  return (
    <>
      <h1>Data Fetch From API</h1>
      <div style={{width : "1320px", display: "flex", flexWrap: "wrap", gap: "30px"   }}>
        {
          post.map((p) => (
            <div key={p.id} style={{width: "20%",border: "1px solid white", padding: "20px"}}>
              <h2 className='title' >{p.title}</h2>
              <p>{p.body}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
