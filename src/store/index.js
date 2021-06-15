import { createStore, combineReducers } from "redux";
import CartReducer from "./reducer/cart";
import UserReducer from "./reducer/user";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
    cart: CartReducer,
    user: UserReducer
});
const store = createStore(root, devToolsEnhancer());
export default store;