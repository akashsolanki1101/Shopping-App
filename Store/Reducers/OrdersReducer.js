import Order from '../../Models/Order'

import {ADD_ORDER,CLEAR_ORDERS_LIST} from '../Actions/OrdersActions'

const initalState = {
    orders : []
}

const reducer = (state = initalState , action)=>{
    switch(action.type){
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.orderData.items,
                action.orderData.totalAmount,
                new Date().toString()
            )
        return{
            ...state,
            orders : state.orders.concat(newOrder)
        }

        case CLEAR_ORDERS_LIST:
            return{
                ...state,
                orders : []
            }

        default:
            return state
    }
}

export default reducer