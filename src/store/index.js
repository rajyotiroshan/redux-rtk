import { userReducer } from "./slices/UsersSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export { store };

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";

export * from "./thunks/removeUser";
