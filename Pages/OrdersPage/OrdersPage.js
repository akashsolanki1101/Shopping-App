import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux' 

import HeaderButton from '../../Components/HeaderButton'
import List from '../../Components/Orders/List'
import {styles} from './Styles'

const OrdersPage = props =>{
    const orders = useSelector(state => state.orders.orders)
    
    if(!orders.length)
    {
        return(
            <View style={styles.messageBox}>
                <Text style={styles.messageText}>No orders found!!</Text>
            </View>
        )
    }
    
    return(
        <View style={styles.container}>
            <List data={orders}/>
        </View>
    )
}

OrdersPage.navigationOptions = navData =>{
    return {
        headerTitle : 'My Orders',
        headerLeft : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu' 
                        iconName='ios-menu'
                        onPress={navData.navigation.toggleDrawer}
                        iconSize={25}                        
                        />
                </HeaderButtons>
            )
        },
        
    }
}



export default OrdersPage