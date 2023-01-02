import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// import paginationMiddleware from "./paginationMiddleware";

// const middleware = [
//   ...getDefaultMiddleware({ serializableCheck: false }),
//   //   paginationMiddleware,
// ];

export default configureStore({
  reducer: rootReducer,
  //   middleware,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          "meta.arg",
          "payload.timestamp",
          "payload.headers",
        ],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
  devTools: true,
});
