import {ADD_NEW_ADDRESS,UPDATE_ADDRESS,SET_SELECTED_ADDRESS_ID} from '../Actions/AddressActions'

const initialState = {
    addressBook : [],
    selectedAddressId : null
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

        case SET_SELECTED_ADDRESS_ID:
            return{
                ...state,
                selectedAddressId : action.id
            }

        default :
            return state
    }
}

export default reducer