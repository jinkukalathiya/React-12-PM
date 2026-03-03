import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/movies")
  //   .then(res => res.json())
  //   .then(data => setMovies(data));
  // },[]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies")
    .then(res => setMovies(res.data));
  })

  const addMovie = () => {
    axios.post("http://localhost:3000/movies", {
      "id": "4",
      "title": "Lagan Laagii Re",
      "year": 2026,
      "genre": "Comedy",
      "rating": 8.6,
      "imageUrl": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA5MjArIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00480946-wpkluhnfbv-portrait.jpg"
    })
    .then(res => setMovies(res.data))    
  }

  return (
    <>
      <div>
        <h2>Movie List</h2>
        <div style={{display : "flex", flexWrap: "wrap", gap : "20px", justifyContent: "center", alignItems: "center"}}>
          {
          movies.map((movie) => (
            <div key={movie.id} style={{width: "20%",  margin : "20px", border: "1px solid #212121", borderRadius : "20px", overflow : "hidden", backgroundColor : "#fff"}}>
              <img src={movie.imageUrl} alt="movie image" style={{width: "100%", height: "370px", objectFit: "cover"}} />
              <div style={{ padding: "20px 30px"}}>
                <h2>{movie.title}</h2>
                <h6>{movie.genre}</h6>
                <p>{movie.rating}</p>
              </div>
            </div>
          ))
        }
        </div>
        <button onClick={addMovie} >Add Movie</button>
      </div>
    </>
  )
}

export default App
