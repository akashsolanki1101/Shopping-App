import {ADD_NEW_ADDRESS,UPDATE_ADDRESS} from '../Actions/AddressActions'

const initialState = {
    addressBook : [],
}

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case ADD_NEW_ADDRESS:
            return{
                ...state,
                addressBook : state.addressBook.concat({id : Math.random()*Math.random() , address : action.newAddress})
            }    
            
        case UPDATE_ADDRESS:
            let updatedAddressBook = [...state.addressBook]
            const index = updatedAddressBook.findIndex(item=>item.id === action.addressId)
            updatedAddressBook[index] = {id : action.addressId , address : action.updatedAddress}
            return{
                ...state,
                addressBook : updatedAddressBook
            }

        default :
            return state
    }
}

export default reducer