import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/user.reducer";
import authReducer from "./auth/authReducer";

const persistConfig = {
    // defines key to store all data
    key: 'root',
    // where to store
    storage,
    // what states to store
    whitelist: ['user', 'auth']
};


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);