import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("remove/user", async (user) => {
  //assume that async func ic called with user obj

  await axios.delete(`http://localhost:3005/users/${user.id}`);

  //return
  // A BUG
  return user; //will be as action.payload for reducer
});

export { removeUser };
