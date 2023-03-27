import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSlice from "../auth/authSlice";
import conversationSlice from "../conversations/conversationSlice";
import messageSlice from "../messages/messageSlice";

const store = configureStore({
    reducer: {

        [apiSlice.reducerPath]: apiSlice.reducer,

        auth: authSlice,
        conversation: conversationSlice,
        message: messageSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store