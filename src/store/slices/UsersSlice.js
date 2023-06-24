import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    /**
     * fetchUSer thunk reducers
     */
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

    /**
     * addUser thunk function action types
     */
    builder.addCase(addUser.pending, (state, action) => {
      //update state to show user loading
      state.isLoading = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      //update state with fetched data
      state.isLoading = false;
      state.data.push(action.payload); // action.payload=> newly added user objecrt; //{} list of users
    });

    builder.addCase(addUser.rejected, (state, action) => {
      //update state with error
      state.isLoading = false;
      state.error = action.error;
    });

    /**
     * removeUser thunk function action types
     */
    builder.addCase(removeUser.pending, (state, action) => {
      //update state to show user loading
      state.isLoading = true;
    });

    builder.addCase(removeUser.fulfilled, (state, action) => {
      //update state with fetched data
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      }); // action.payload=> newly added user objecrt; //{} list of users
    });

    builder.addCase(removeUser.rejected, (state, action) => {
      //update state with error
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userReducer = userSlice.reducer;
