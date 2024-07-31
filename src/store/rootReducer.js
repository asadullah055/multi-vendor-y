import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./Reducer/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
