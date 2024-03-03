import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "@/slices/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import createWebStorage from "redux-persist/es/storage/createWebStorage";


const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(key, value) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        }
    }
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["token"],
}

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});