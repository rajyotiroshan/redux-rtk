import { userReducer } from "./slices/UsersSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export { store };
