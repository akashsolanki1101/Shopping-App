import React,{useEffect} from 'react'

import {View,Text,Button} from 'react-native'
import {useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../Components/HeaderButton'
import {styles} from './Styles'

const HomePage = props =>{
    const CartItems = useSelector(state => state.cart.CartItems)
    const totalItems = CartItems.length

    useEffect(()=>{
        props.navigation.setParams({totalItems : totalItems})
    },[totalItems])

    return(
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Button 
                title='SHOP'
                onPress={()=>props.navigation.navigate({
                    routeName : 'ShopPage'
                })}
            />
        </View>
    )
}

HomePage.navigationOptions = navData =>{
    const totalItems = navData.navigation.getParam('totalItems')

    return {
        headerTitle : 'Home',
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
        )},
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

export default HomePage