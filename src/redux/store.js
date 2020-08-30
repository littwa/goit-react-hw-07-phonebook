import app from "../redux/app/appReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { app },
});

export default store;
