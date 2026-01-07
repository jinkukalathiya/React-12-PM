import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../components/tasks/taskSlice';
import { loadState,saveState } from "./localStorage";

export const store = configureStore({
    reducer : {
        tasks : tasksReducer
    },
    preloadedState : {
        tasks : loadState()
    }
})

store.subscribe(() => {
    saveState(store.getState().tasks);
})