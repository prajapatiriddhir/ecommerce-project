import { updateCart } from "../../utility/cart";

const initialState = {
    cart: []
};

export default function cartReduce(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_CART":
            return {
                ...state,
                cart: updateCart(
                    state.cart,
                    action.payload.product,
                    action.payload.action
                )
            };
        case "CLEAR_CART":
            return {...state, cart: [] };
        default:
            return {...state };
    }
}