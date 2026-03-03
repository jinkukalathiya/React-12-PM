import { ref, get, push, update, remove } from "firebase/database";
import { database } from "../../firebase";

export const fetchMoviesFromFirebase = async () => {
    const snapshot = await get(ref(database,"movies"));
    return snapshot.exists() ? snapshot.val() : {}
}

export const addMovieInFirebase = async (movie) => {
    console.log("Data Adding...");
    const newRef = await push(ref(database,"movies"), movie);
    console.log(newRef);
    return { id: newRef.key, ...movie};
}

export const updateMovieInFirebase = async(id, updatedMovie) => {
    console.log("Movie Updating Start...");
    await update(ref(database,`movies/${id}`), updatedMovie);
    console.log("Data updated");
    return {id, ...updatedMovie };
    
}

export const deleteMovieFromFirebase = async (id) => {
    console.log("Movie Deleting");
    await remove(ref(database,`movies/${id}`));
    return id;
}