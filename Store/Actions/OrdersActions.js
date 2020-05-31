export const ADD_ORDER = "ADD_ORDER"
export const CLEAR_ORDERS_LIST = "CLEAR_ORDERS_LIST"

export const addOrder = (items,totalAmount)=>{
    return{
        type : ADD_ORDER,
        orderData : {
            items : items,
            totalAmount : totalAmount
        }
    }
}

export const clearOrdersList = ()=>{
    return{
        type  : CLEAR_ORDERS_LIST
    }
}