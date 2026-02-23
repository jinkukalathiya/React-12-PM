import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: [],
};

const studentSlice = createSlice({
    name : "students",
    initialState,
    reducers : {
        addStudent: (state, action) => {
            state.studentList.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.studentList = state.studentList.filter(
                (student) => student.id !== action.payload
            );
        },
        updateStudent: (state, action) => {
            const index = state.studentList.findIndex(
                (student) => student.id === action.payload.id
            );
            console.log(index);
            console.log("Hello...");
            if(index !== -1){
                state.studentList[index] = action.payload
            }
        },
    },
});

export const { addStudent, deleteStudent, updateStudent} = studentSlice.actions;

export default studentSlice.reducer;