export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY"
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY"

export const addToCart = (productId)=>{
    return{
        type : ADD_TO_CART,
        productId : productId
    }
}

export const removeCartItem = (productId)=>{
    return{
        type : REMOVE_CART_ITEM,
        productId : productId
    }
}

export const increaseItemQuantity = (productId)=>{
    return{
        type : INCREASE_ITEM_QUANTITY,
        productId : productId
    }
}

export const decreaseItemQuantity = (productId)=>{
    return{
        type : DECREASE_ITEM_QUANTITY,
        productId : productId
    }
}