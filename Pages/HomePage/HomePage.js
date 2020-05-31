import React from 'react'

import {View,Text,Button} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../Components/HeaderButton'
import {styles} from './Styles'

const HomePage = props =>{
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
}}

export default HomePage