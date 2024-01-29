import { createStore } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore (
    persistedReducer,
    {},
    Window.__REDUX__DEVTOOLS_EXTENSION && window.__REDUX__DEVTOOLS_EXTENSION__()
)
const persistor = persistStore(store)
export default store;
export {persistor}