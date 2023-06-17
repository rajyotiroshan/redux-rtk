import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { pause } from "./fetchUsers";
const addUser = createAsyncThunk("users/create", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.person.fullName(),
  });
  pause(3000);
  return response.data;
});

export { addUser };
