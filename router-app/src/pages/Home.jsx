import React from "react"
import { Link } from "react-router-dom"

function Home() {

    const student = {
        name : "Jinkal Kalathiya",
        email : "rnw1webjinkal@gmail.com",
        course : "Full Stack Development"
    }

  return (
    <>
      <div>
        <h1>Home Page</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, facere perferendis asperiores repudiandae magni quas ipsam, esse accusamus officiis nam odit laboriosam, fugiat quis non rem! Delectus mollitia facilis quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dicta corporis quibusdam placeat, molestiae numquam itaque quam expedita minus velit corrupti odio, exercitationem quaerat facere repellat ex iure alias dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum earum accusantium consectetur nam? Fugit, earum dolore. Debitis, corrupti omnis suscipit, accusantium tempora sunt nobis perferendis dicta laboriosam similique illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus temporibus expedita fuga tenetur magni, beatae blanditiis esse veritatis, ab dicta dolorem magnam est laboriosam. Perspiciatis et ad earum quibusdam.</p>   

        <Link to="/profile" state={student}>Go at Your Profile</Link>   
      </div>
    </>
  )
}

export default Home
