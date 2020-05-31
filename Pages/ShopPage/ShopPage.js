import React from 'react'

import {View} from 'react-native'

import {List} from '../../Components/ShopPage/List'
import {styles} from './Styles' 
import PRODUCTS from '../../Data/Products'


const ShopPage = props =>{
    return(
        <View style={styles.container}>
            <List data={PRODUCTS} navigation={props.navigation}/>
        </View> 
    )
}

ShopPage.navigationOptions = navData =>{
    return {
        headerTitle : 'Our Collection',
}}


export default ShopPage