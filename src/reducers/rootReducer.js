import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import staffReducer from "./staffReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    staffs: staffReducer,
    products: productReducer
});

export default rootReducer;