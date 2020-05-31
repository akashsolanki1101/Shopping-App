import React from 'react'

import {View,ScrollView,TouchableNativeFeedback,Text} from 'react-native'
import {useSelector} from 'react-redux'

import {List} from '../../Components/OrderSummaryPage/List'
import {styles} from './Styles'

const OrderSummaryPage = props=>{
    const addressBook = useSelector(state=>state.addressBook.addressBook)
    const productList = props.navigation.getParam('productList')
    let totalPrice = 0

    for(let index in productList)
        totalPrice += productList[index].item.price *  productList[index].quantity     

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.deliveryAddressBar}>
                    {
                        addressBook[0]&&
                        <View style={styles.deliveryAddress}>
                        <View style={styles.userName}>
                            <Text style={styles.userNameText}>{addressBook[0].address.userName}</Text>
                            <View style={styles.addressType}>
                                <Text style={styles.addressTypeText}>{addressBook[0].address.homeAddress?'HOME':'WORK'}</Text>
                            </View>
                        </View>
                        <View>
                            <Text numberOfLines={1}>{addressBook[0].address.houseInfo}, {addressBook[0].address.streetInfo}, {addressBook[0].address.landMark}</Text>
                            <Text>{addressBook[0].address.city}, {addressBook[0].address.state} - {addressBook[0].address.pinCode}</Text>
                        </View>
                        <View>
                            <Text>{addressBook[0].address.mobileNumber}</Text>
                        </View>
                        </View>
                    }
                    <TouchableNativeFeedback
                        onPress={()=>props.navigation.navigate('SelectAddress')}
                    >
                        <View style={styles.changeAddressButton}>
                            <Text style={styles.changeAddressButtonText}>CHANGE</Text>
                        </View> 
                    </TouchableNativeFeedback>
                </View>
                <List data={productList}/>
            </ScrollView>
            <View style={styles.priceInfoBar}>
                    <Text style={styles.totalPriceText}>₹{totalPrice.toFixed(2)}</Text>
                    <TouchableNativeFeedback
                        onPress={()=>props.navigation.navigate({
                            routeName : 'Payment',
                            params : {
                                totalPrice : totalPrice,
                                productList : productList
                            }})}>
                        <View style={styles.placeOrderButton}>
                            <Text style={styles.placeOrderButtonText}>CONTINUE</Text>
                        </View> 
                    </TouchableNativeFeedback>
                </View>
        </View>  
    )
}

export default OrderSummaryPage