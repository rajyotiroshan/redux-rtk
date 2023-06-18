import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("remove/user", async (user) => {
  //assume that async func ic called with user obj

  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  //return
  // A BUG
  return response.data;
});

export { removeUser };
