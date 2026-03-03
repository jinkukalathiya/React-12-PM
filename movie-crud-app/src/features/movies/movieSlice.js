import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addMovieInFirebase,deleteMovieFromFirebase, fetchMoviesFromFirebase, updateMovieInFirebase } from "./movieAPI";
import { update } from "firebase/database";
import { act } from "react";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async() => (
        await fetchMoviesFromFirebase()
    )
)

export const addMovie = createAsyncThunk(
    'movies/addMovie',
    async(movie) => (
        await addMovieInFirebase(movie)
    )
)

export const updateMovie = createAsyncThunk(
    'movies/updateMovie',
    async({id, updatedMovie}) => {
        console.log(id);
        console.log(updatedMovie);
        console.log("Data Updating Process....")
        return await updateMovieInFirebase(id, updatedMovie); 
    }
)

export const deleteMovie = createAsyncThunk(
    'movies/deleteMovie',
    async (id) =>{
        await deleteMovieFromFirebase(id);
        return id; 
    }
)

const movieSlice = createSlice({
    name :"movies",
    initialState: {
        list : [],
        loading: false,
        actionLoading: false,
        error: null
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchMovies.fulfilled,(state, action) => {
            state.loading = false;
            state.list = Object.entries(action.payload).map(([id,value]) => ({
                id,
                ...value,
            }));
        })
        .addCase(addMovie.pending,(state) => {
            console.log("Data add Process Running...");
            state.actionLoading = true
        })
        .addCase(addMovie.fulfilled,(state, action) => {
            console.log("Data Added Successfully...");
            state.actionLoading = false;
            state.list.push(action.payload);
        })
        .addCase(updateMovie.fulfilled, (state, action) => {
            console.log("Data Updated Successfully...");
            const index = state.list.findIndex((movie) => movie.id === action.payload.id);
            if(index !== -1){
                state.list[index] = action.payload
            }
        })
        .addCase(deleteMovie.fulfilled,(state,action) => {
            state.list = state.list.filter(
                (movie) => movie.id !== action.payload
            )
        })
    }
})

export default movieSlice.reducer;