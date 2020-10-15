import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch,useSelector} from 'react-redux'

import {styles} from './Styles'
import {setSelectedAddress} from '../../Store/Actions/AddressActions' 

export const List = props=>{
    const selectedAddrId = useSelector(state=>state.addressBook.selectedAddressId)
    const [selectedAddressId,setSelectedAddressId] = useState(selectedAddrId? selectedAddrId : null)

    const dispatch = useDispatch();

    const selectedAddressHandler = id =>{
        setSelectedAddressId(id)
        dispatch(setSelectedAddress(id))
    }

    return(
        <View style={styles.list}>
            {
                props.data.map(item=>{
                    return(
                        <View style={styles.listItem} key={item.id}>
                            <TouchableOpacity activeOpacity={.5}
                                onPress={()=>selectedAddressHandler(item.id)} 
                            >
                                <View style={{flex : 1 , flexDirection : 'row' , justifyContent:'space-around'}}>
                                    <View style={styles.leftBox}>
                                        <Ionicons name={item.id===selectedAddressId?'md-radio-button-on':'md-radio-button-off'} size={22} color={'#FF7A89'} 
                                        onPress={()=> {}}/>
                                    </View>
                                    <View style={styles.middleBox}>
                                        <View style={styles.userName}>
                                            <Text style={styles.userNameText}>{item.address.userName}</Text>
                                            <View style={styles.addressType}>
                                                <Text style={styles.addressTypeText}>{item.address.homeAddress?'HOME':'WORK'}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text>{item.address.houseInfo}, {item.address.streetInfo}</Text>
                                            <Text>{item.address.landMark}</Text>
                                            <Text>{item.address.city}, {item.address.state} - {item.address.pinCode}</Text>
                                        </View>
                                        <View>
                                            <Text>{item.address.mobileNumber}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.rightBox}>
                                <TouchableNativeFeedback 
                                onPress={()=>{
                                    props.navigation.navigate(
                                        {
                                            routeName : 'AddressForm',
                                            params:{
                                                id : item.id
                                            }
                                        })
                                    }}
                                    >
                                    <View style={styles.editAddressButton}>
                                        <Text style={styles.editAddressButtonText}>EDIT</Text>
                                    </View> 
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}