import { createStore, combineReducers } from "redux";
import cartReduce from "./reducer/cart";
import UserReducer from "./reducer/user";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
    cart: cartReduce,
    user: UserReducer
});
const store = createStore(root,devToolsEnhancer());
export default store;



