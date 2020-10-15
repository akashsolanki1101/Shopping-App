import React,{useState,useEffect} from 'react'

import {View,Text,ScrollView,TextInput, TouchableWithoutFeedback,TouchableNativeFeedback,Keyboard, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch,useSelector} from 'react-redux'

import {styles} from './Styles'
import {addNewAddrress,updateAddress} from '../../Store/Actions/AddressActions'
import Address from '../../Models/Address'
import {StateList} from '../../Components/AddressForm/StateList'
import {Backdrop} from '../../Components/Backdrop/Backdrop'

const AddressForm = props=>{
    const addressBook = useSelector(state=>state.addressBook.addressBook)
    const selectedAddressId = props.navigation.getParam('id')
    const selectedAddress = addressBook.find(item=>item.id===selectedAddressId)   
     
    const [showStateList,setShowStateList] = useState(false)
    
    const [pincode,setPincode] = useState(selectedAddress ? selectedAddress.address.pinCode : '')
    const [houseInfo,setHouseInfo] = useState(selectedAddress ? selectedAddress.address.houseInfo : '')
    const [streetInfo,setStreetInfo] = useState(selectedAddress ? selectedAddress.address.streetInfo : '')
    const [city,setCity] = useState(selectedAddress ? selectedAddress.address.city : '')
    const [state,setState] = useState(selectedAddress ? selectedAddress.address.state : '')
    const [landMark,setLandMark] = useState(selectedAddress ? selectedAddress.address.landMark : '')
    const [userName,setUserName] = useState(selectedAddress ? selectedAddress.address.userName : '')
    const [mobileNumber,setMobileNumber] = useState(selectedAddress ? selectedAddress.address.mobileNumber : '')
    const [alternateMobileNumber,setAlternateMobileNumber] = useState(selectedAddress ? selectedAddress.address.alternateMobileNumber : '')
    const [homeAddress,setHomeAddress] = useState(selectedAddress ? selectedAddress.address.homeAddress : true)
    const [workAddress,setWorkAddress] = useState(selectedAddress ? selectedAddress.address.workAddress : false)

    const dispatch = useDispatch()

    const selectedStateHandler = name=>{
        setState(name)
        closeStateDropDown()
    }

    const closeStateDropDown= ()=>{
        setShowStateList(false)         
    }

    const saveAddressHandler = ()=>{
        const newAddress = new Address(
            pincode,
            houseInfo,
            streetInfo,
            city,
            state,
            landMark,
            userName,
            mobileNumber,
            alternateMobileNumber,
            homeAddress,
            workAddress
        )
        dispatch(addNewAddrress(newAddress))
        props.navigation.goBack()
    }

    const updateAddressHandler = ()=>{
        const newAddress = new Address(
            pincode,
            houseInfo,
            streetInfo,
            city,
            state,
            landMark,
            userName,
            mobileNumber,
            alternateMobileNumber,
            homeAddress,
            workAddress
        )
        dispatch(updateAddress(newAddress,selectedAddressId))
        props.navigation.goBack()
    }

    useEffect(()=>{
        props.navigation.setParams({selectedAddress : selectedAddress})
    },[selectedAddress])

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=>setShowStateList(false)}>
                <ScrollView>
                    <View style={styles.addressInfo}> 
                        <TextInput placeholder='Pincode*' style={styles.textInput} keyboardType={"number-pad"} value={pincode} onChangeText={text=>setPincode(text)}/>
                        <TextInput placeholder='House No.,Building Name*' style={styles.textInput} value={houseInfo} onChangeText={text=>setHouseInfo(text)}/>    
                        <TextInput placeholder='Road Name, Area, Colony*' style={styles.textInput} value={streetInfo} onChangeText={text=>setStreetInfo(text)}/>    
                        <TextInput placeholder='City*' style={styles.textInput} value={city} onChangeText={text=>setCity(text)}/>    
                        <TextInput placeholder='State*' 
                            style={styles.textInput}
                            onFocus={()=>{
                                Keyboard.dismiss()
                                setShowStateList(true)
                            }} 
                            value={state}
                        />
                        <TextInput placeholder='Landmark(optional)' style={styles.textInput} value={landMark} onChangeText={text=>setLandMark(text)}/>    
                    </View>
                    <View style={styles.personalInfo}>
                        <TextInput placeholder='Name*' style={styles.textInput} value={userName} onChangeText={text=>setUserName(text)}/>    
                        <TextInput placeholder='Mobile Number*' style={styles.textInput} keyboardType={"number-pad"} value={mobileNumber} onChangeText={text=>setMobileNumber(text)}/>    
                        <TextInput placeholder='Alternate Number(Optional)' style={styles.textInput} keyboardType={"number-pad"} value={alternateMobileNumber} onChangeText={text=>setAlternateMobileNumber(text)}/>    
                    </View>
                    <View style={styles.addressType}>
                    <TouchableNativeFeedback
                        onPress={()=>
                            {
                                setHomeAddress(true)
                                setWorkAddress(false)
                            }}>
                        <Text style={styles.addressTypeText}>
                            <Ionicons name={homeAddress?'md-radio-button-on':'md-radio-button-off'} size={22} color={'#FF7A89'}/>  Home Address
                        </Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={()=>
                            {
                                setHomeAddress(false)
                                setWorkAddress(true)
                            }}>
                        <Text style={styles.addressTypeText}>
                            <Ionicons name={workAddress?'md-radio-button-on':'md-radio-button-off'} size={22} color={'#FF7A89'}/>  Work/Office Address
                        </Text>
                    </TouchableNativeFeedback>
                    </View>
                    <View style={styles.saveButtonBox}>
                        <TouchableNativeFeedback
                                onPress={selectedAddress? updateAddressHandler:saveAddressHandler}
                        >
                            <View style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>{selectedAddress?'UPDATE':'SAVE'}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
            {
                showStateList&&
                <Backdrop
                    closeHandler={closeStateDropDown}
                >
                    <StateList
                        selectedStateHandler={selectedStateHandler}
                    />
                </Backdrop>
            }
        </View>
    )
}


AddressForm.navigationOptions = navData=>{
    const selectedAddress = navData.navigation.getParam('selectedAddress')
    const title = selectedAddress ? 'Edit address' : 'Add a new address'
    return{
        headerTitle : title
    }
}


export default AddressForm