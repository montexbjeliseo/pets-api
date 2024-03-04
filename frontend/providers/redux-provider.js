'use client';

import { store } from "@/stores/store";
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"

export const persistor = persistStore(store);

export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}