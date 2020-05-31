import Address from '../../Models/Address'

export const ADD_NEW_ADDRESS = "ADD_NEW_ADDRESS"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"

export const addNewAddrress = newAddress=>{
    return{
        type : ADD_NEW_ADDRESS,
        newAddress
    }
}

export const updateAddress = (updatedAddress,addressId)=>{
    return{
        type: UPDATE_ADDRESS,
        updatedAddress,
        addressId
    }
}