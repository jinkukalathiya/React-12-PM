import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers",
  async() => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    return data.users;
    ;
  }
)



const initialState = {
  users: [],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      // pending
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // fulfilled
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // rejected
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch users!";
      });

      
  }
});

export default userSlice.reducer;
