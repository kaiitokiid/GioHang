import * as Types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {

    var { product, quantity, id } = action;
    var index = -1;

    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index === -1) {
                state.push({
                    product,
                    quantity
                })
            }
            else {
                state[index].quantity += quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.DELETE_PRODUCT_ITEM:
            index = findProductInCartByID(state, id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.INCREASE_PRODUCT_ITEM:
            index = findProductInCartByID(state, id);
            if (index !== -1) {
                state[index].quantity++;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case Types.DECREASE_PRODUCT_ITEM:
            index = findProductInCartByID(state, id);
            if (index !== -1) {
                if (state[index].quantity > 1)
                    state[index].quantity--
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

var findProductInCartByID = (cart, id) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;