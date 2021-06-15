export const updateCartAction = (product, action) => ({
    type: "UPDATE_CART",
    payload: { product, action }
});

export const clearCartAction = () => ({ type: "CLEAR_CART" });