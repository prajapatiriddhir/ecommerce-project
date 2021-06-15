export const updateCart = (cart, product, action) => {
    var cartProduct = cart.findIndex((x) => x.id === product.id);
    if (cartProduct !== -1 && action === "DEC") {
        if (cart[cartProduct].qty === 1) {
            cart.splice(cartProduct, 1);
        } else {
            cart[cartProduct].qty--;
        }
    } else if (action === "INC") {
        if (cartProduct !== -1) {
            cart[cartProduct].qty++;
        } else {
            cart.push({...product, qty: 1 });
        }
    }
    return [...cart];
};