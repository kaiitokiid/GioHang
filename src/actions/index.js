import * as Types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity,
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MSG,
        message
    }
}

export const actDeleteProductItem = (id) => {
    return {
        type: Types.DELETE_PRODUCT_ITEM,
        id
    }
}

export const actIncreaseProductItem = (id) => {
    return {
        type: Types.INCREASE_PRODUCT_ITEM,
        id,
    }
}

export const actDecreaseProductItem = (id) => {
    return {
        type: Types.DECREASE_PRODUCT_ITEM,
        id,
    }
}