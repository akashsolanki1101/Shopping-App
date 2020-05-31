import Products from '../../Data/Products'

import {
    TOGGLE_WISHLIST_ITEM,
    REMOVE_WISHLIST_ITEM,
    EMPTY_WISHLIST,
} from '../Actions/WishListActions'

const initialState = {
    Products : Products,
    WishList : [],
}


const reducer = (state = initialState , action)=>{
    switch(action.type)
    {
        case TOGGLE_WISHLIST_ITEM:
        {
            const selectedProduct = state.Products.find(product=>product.productId === action.productId)
            let updatedWishList = [...state.WishList]
            const isPresent = updatedWishList.find(product => product.productId === action.productId)

            if(isPresent)
                updatedWishList = updatedWishList.filter(item => item.productId !== selectedProduct.productId)
            
            else
                updatedWishList = updatedWishList.concat(selectedProduct)

            return{
                ...state,
                WishList : updatedWishList
            }
        }

        case REMOVE_WISHLIST_ITEM:
        { 
            let updatedWishList = [...state.WishList]
            updatedWishList =  updatedWishList.filter(product=>product.productId!==action.productId)

            return{
                ...state,
                WishList : updatedWishList
            }
        }

        case EMPTY_WISHLIST :{
            return{
                ...state,
                WishList : []
            }
        }

        default:
            return state;

    }
}

export default reducer