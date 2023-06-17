import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      //update state to show user loading
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //update state with fetched data
      state.isLoading = false;
      state.data = action.payload; //[{},{}] list of users
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      //update state with error
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userReducer = userSlice.reducer;
