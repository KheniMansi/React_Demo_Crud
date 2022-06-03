import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
export default configureStore({
    reducer: {
        user: userReducer,
        userDatas: userReducer
    },    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})