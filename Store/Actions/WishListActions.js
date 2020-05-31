export const TOGGLE_WISHLIST_ITEM = "TOGGLE_WISHLIST_ITEM"
export const REMOVE_WISHLIST_ITEM = "REMOVE_WISHLIST_ITEM"
export const EMPTY_WISHLIST = "EMPTY_WISHLIST"


export const toggleWishListItem = (productId)=>{
    return{
        type : TOGGLE_WISHLIST_ITEM,
        productId : productId
    }
}

export const removeWishListItem = (productId)=>{
    return{
        type : REMOVE_WISHLIST_ITEM,
        productId : productId
    }
}

export const emptyWishlist = ()=>{
    return{
        type : EMPTY_WISHLIST
    }
}