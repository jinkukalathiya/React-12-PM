import React from "react";
import { useState, useEffect } from "react";
import { auth, storage } from "../firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Upload = () => {
  
  const [file, setFile] = useState(null);

  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async() => {
    if(!file || !auth.currentUser){
      return("Login required.")
    }

    const imageRef = ref(
      storage,
      `users/${auth.currentUser.uid}/${file.name}`
    )

    await uploadBytes(imageRef , file)
    const downloadURL = await getDownloadURL(imageRef)
    setImageUrl(downloadURL)
  }

  return (
    <>
      <input type="file" name="" id="" />
      <button onClick={uploadImage} type="submit">
        submit
      </button>
      <div>Upload</div>

      {
        imageUrl && (
            <img src={imageUrl} alt="Uploded" width={"200px"}/>
        )
      }
    </>
  );
};

export default Upload;
