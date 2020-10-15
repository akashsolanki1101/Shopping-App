import React,{useEffect} from 'react'

import {View,Text} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'

import HeaderButton from '../../Components/HeaderButton'
import {List} from '../../Components/ShopPage/List'
import {styles} from './Styles' 
import PRODUCTS from '../../Data/Products'


const ShopPage = props =>{
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalItems = CartItems.length

    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])

    return(
        <View style={styles.container}>
            <List data={PRODUCTS} navigation={props.navigation}/>
        </View> 
    )
}

ShopPage.navigationOptions = navData =>{
    const totalItems = navData.navigation.getParam('totalItems')
    return {
        headerTitle : 'Our Collection',
        headerRight : ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu' 
                        iconName='ios-heart'
                        onPress={()=> navData.navigation.navigate('WishList')}
                        iconSize={25}                        
                    />
                    <View style={styles.cartIconContainer}>
                        <Item
                            title='Menu' 
                            iconName='md-cart'
                            onPress={()=> navData.navigation.navigate('CartPage')}
                            iconSize={25}                        
                        />
                        {
                            totalItems!==0?
                            <View style={styles.itemCountContainer}>
                                <Text style={styles.itemCountText}>{totalItems}</Text>
                            </View>
                            :null
                        }
                    </View>
                </HeaderButtons>
            )
        },
}}


export default ShopPage