import React from 'react'

import {View,Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'

import HomePage from '../Pages/HomePage/HomePage'
import ShopPage from '../Pages/ShopPage/ShopPage'
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage'
import CartPage from '../Pages/Cart/CartPage'
import SellerProductsPage from '../Pages/SellerProductPage/SellerProductPage'
import EditSellerProductDetailPage from '../Pages/SellerProductDetailPage/SellerProductDetailPage'
import OrdersPage from '../Pages/OrdersPage/OrdersPage'
import OrderSummaryPage from '../Pages/OrderSummaryPage/OrderSummaryPage'
import SelectAddressPage from '../Pages/SelectAddressPage/SelectAddressPage'
import PaymentPage from '../Pages/PaymentPage/PaymentPage'
import WishList from '../Pages/WishList/WishList'
import AddressForm from '../Pages/AddressForm/AddressForm'
import HeaderButton from '../Components/HeaderButton'

const defaultHeaderConfiguration = {
    headerStyle :{
        height : 100,
        backgroundColor : '#FF7A89',
    },
    headerTitleStyle:{
        color : '#fff',
        fontWeight :'700'
    },
}

const Navigation1 = createStackNavigator({
    HomePage : HomePage,
    ShopPage : ShopPage,
    ProductDetailPage : ProductDetailPage,
    CartPage : CartPage,
    WishList : WishList,
    OrderSummary : OrderSummaryPage,
    SelectAddress : SelectAddressPage,
    AddressForm : AddressForm,
    Payment : PaymentPage,
},{
    navigationOptions:{
        drawerIcon :(drawerConfig) =><Ionicons name='md-home' color={drawerConfig.activeTintColor} size={20} />
    },
    defaultNavigationOptions : ()=>{
        return{
        ...defaultHeaderConfiguration,
    }
}
})

const Navigation2 = createStackNavigator({
    OrdersPage : OrdersPage
},{
    defaultNavigationOptions : defaultHeaderConfiguration,
    navigationOptions:{
        drawerIcon :(drawerConfig) =><Ionicons name='md-list' color={drawerConfig.activeTintColor} size={20} />
    },
})

const Navigation3 = createStackNavigator({
    SellerProductsPage : SellerProductsPage,
    SellerProductDetailPage : EditSellerProductDetailPage
},{
    defaultNavigationOptions : defaultHeaderConfiguration
})

const RootNavigation = createDrawerNavigator({
    Home : Navigation1,
    MyOrders :{
        screen : Navigation2,
        navigationOptions:{
            title : 'My Orders'
        }
    } ,
    SellerPage : Navigation3,
},{
    contentOptions:{
        activeTintColor : 'black',
    },
})

export default createAppContainer(RootNavigation);