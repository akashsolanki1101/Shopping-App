import Products from '../../Data/Products'

import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
} from '../Actions/CartActions'

const initialState = {
    Products : Products,
    CartItems : [],
    SellerProducts : [],
    totalPrice : 0
}

const reducer = (state = initialState , action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
        {
            const selectedProduct = state.Products.find(product=>product.productId === action.productId)
            let updatedCartList = [...state.CartItems]
            let updatedTotalAmount = state.totalPrice
            let index = updatedCartList.findIndex(object => object.item.productId === selectedProduct.productId)
            updatedTotalAmount += selectedProduct.price
            if(index>=0)
            {
                updatedCartList[index].quantity += 1 
            }
            else{
                updatedCartList = updatedCartList.concat({item : selectedProduct , quantity : 1})
            }

            return{
                ...state,
                CartItems : updatedCartList,
                totalPrice : updatedTotalAmount
            }
        }

        case REMOVE_CART_ITEM:
        {
            let updatedCartList = [...state.CartItems]
            let updatedTotalAmount = state.totalPrice
            let index = updatedCartList.findIndex(object => object.item.productId === action.productId)
            updatedTotalAmount -= updatedCartList[index].item.price * updatedCartList[index].quantity
            updatedCartList =  updatedCartList.filter(product=>product.item.productId!==action.productId)
            return{
                ...state,
                CartItems : updatedCartList,
                totalPrice : updatedTotalAmount
            }
        }

        case INCREASE_ITEM_QUANTITY:
        {
            let updatedTotalAmount = state.totalPrice
            let updatedCartList = [...state.CartItems]
            let index = updatedCartList.findIndex(object => object.item.productId === action.productId)
            updatedCartList[index].quantity += 1
            updatedTotalAmount += updatedCartList[index].item.price
            return{
                ...state,
                CartItems : updatedCartList,
                totalPrice : updatedTotalAmount
            }
        }

        case DECREASE_ITEM_QUANTITY:
        {
            let updatedTotalAmount = state.totalPrice
            let updatedCartList = [...state.CartItems]
            let index = updatedCartList.findIndex(object => object.item.productId === action.productId)
            let quantity = updatedCartList[index].quantity
            updatedTotalAmount -= updatedCartList[index].item.price
            if(quantity>1)
            {
                updatedCartList[index].quantity -=1
            }
            else{
                updatedCartList =  updatedCartList.filter(object => object.item.productId!==action.productId)
            }
            return{
                ...state,
                CartItems : updatedCartList,
                totalPrice : updatedTotalAmount
            }
        }

        default:
            return state;

    }
}

export default reducer