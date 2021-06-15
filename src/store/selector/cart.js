export const selectCartCount = (state) => state.cart.cart.length;

export const selectCartMapping = (state) => {
    return state.cart.cart.reduce((prev, curr) => {
        prev[curr.id] = curr;
        return prev;
    }, {});
};

export const selectCart = (state) => state.cart.cart;