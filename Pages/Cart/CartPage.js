import React,{useEffect} from 'react'

import {View,Text,ScrollView,TouchableNativeFeedback} from 'react-native'
import {useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import {List} from '../../Components/Cart/List'
import {styles} from './Styles'
import HeaderButton from '../../Components/HeaderButton'

const CartPage = props =>{
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalAmount = useSelector(state => state.cart.totalPrice)
    const totalItems = CartItems.length
    
    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])
    
    if(CartItems.length===0)
    {
        return(
            <View style={styles.message}>
                <Text style={styles.messageText1}>Hey it feels so light!!</Text>
                <Text style={styles.messageText2}>Let's add some items.</Text>
            </View>
        )
    }
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <List data={CartItems} navigation={props.navigation}/>
            </ScrollView>
            <View style={styles.priceInfoBar}>
                <Text style={styles.totalPriceText}>₹{totalAmount.toFixed(2)}</Text>
                <TouchableNativeFeedback
                    onPress={()=>props.navigation.navigate({
                        routeName : 'OrderSummary',
                        params:{
                            productList : [...CartItems]
                        }
                    })}
                >
                    <View style={styles.placeOrderButton}>
                        <Text style={styles.placeOrderButtonText}>Place Order</Text>
                    </View> 
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

CartPage.navigationOptions = navData=>{
    const totalItems = navData.navigation.getParam('totalItems')
    const title = totalItems!==0 ? `My Cart(${totalItems})` : 'My Cart'
    return{
        headerTitle : title,
        headerRight : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu' 
                        iconName='ios-heart'
                        onPress={()=> navData.navigation.navigate('WishList')}
                        iconSize={25}                        
                    />
                </HeaderButtons>
            )
        },
    }
}

export default CartPage